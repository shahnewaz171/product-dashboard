import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ConditionsProps, ReactNode, SourcesProps } from '../types/model';
import { productList, productProps } from '../components/data/products';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
    const [products, setProducts] = useState<productProps[]>([]);
    const [percentage, setPercentage] = useState<SourcesProps | null>(null);
    const [phoneConditions, setPhoneConditions] = useState<ConditionsProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const toastId = useRef<any>(null);

    const getProducts = () => {
        const productLength = productList.length;
        let totalBikroy = 0;
        let totalDaraz = 0;
        let totalPickaboo = 0;
        let officialWarranty = 0;
        let unOfficialWarranty = 0;
        let withoutWarranty = 0;
        let usedPhone = 0;

        if (productLength) {
            setIsLoading(false);
            setProducts(productList);

            /* for showing the percentage of 3 sources */
            productList.forEach(item => {
                if (item.phone_link?.includes('bikroy')) {
                    totalBikroy++;
                }
                else if (item.phone_link?.includes('daraz')) {
                    totalDaraz++;
                }
                else if (item.phone_link?.includes('pickaboo')) {
                    totalPickaboo++;
                }
            });

            const sourcesLength = totalBikroy + totalDaraz + totalPickaboo;

            setPercentage({
                bikroy: Math.round((totalBikroy / sourcesLength) * (100)),
                daraz: Math.round((totalDaraz / sourcesLength) * (100)),
                pickaboo: Math.round((totalPickaboo / sourcesLength) * (100)),
            });

            /* for showing phone conditions */
            for (let item of productList) {
                const { phone_price, official_warranty, unofficial_warranty, no_warranty, used_phone } = item;

                if (official_warranty) {
                    officialWarranty += phone_price;
                }
                if (unofficial_warranty) {
                    unOfficialWarranty += phone_price;
                }
                if (no_warranty) {
                    withoutWarranty += phone_price;
                }
                if (used_phone) {
                    usedPhone += phone_price;
                }
            }

            setPhoneConditions({
                official: officialWarranty,
                unofficial: unOfficialWarranty,
                without_warranty: withoutWarranty,
                used: usedPhone
            });
        }
        else {
            setIsLoading(true);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const alertMessage = (value: string, isSuccess: boolean) => {
        toast.dismiss(toastId.current);
        if (isSuccess) {
            toast.success(value, {
                theme: "light",
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000
            });
        }
        else {
            toast.error(value, {
                theme: "light",
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000
            });
        }
    };

    const ErrorMessages = ({ errors, inputName }: any) => {
        return (
            <ErrorMessage
                errors={errors}
                name={`${inputName}`}
                render={({ message }) => <p style={{ margin: 0, fontSize: "11px", color: "rgb(211, 47, 47)" }}>{message}</p>}
            />
        )
    }

    return (
        <UserContext.Provider
            value={{
                alertMessage,
                ErrorMessages,
                products,
                getProducts,
                isLoading,
                percentage,
                phoneConditions
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(UserContext);
};

export default useGlobalContext;