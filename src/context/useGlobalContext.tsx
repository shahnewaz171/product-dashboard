import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ConditionsProps, productProps, ReactNode, SourcesProps } from '../types/model';
import { productList } from '../components/data/products';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
    const [products, setProducts] = useState<productProps[]>([]);
    const [percentage, setPercentage] = useState<SourcesProps | null>(null);
    const [phoneConditions, setPhoneConditions] = useState<ConditionsProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>("");
    const toastId = useRef<any>(null);

    const getProducts = (data: productProps[]) => {
        const productLength = data.length;
        let totalBikroy = 0;
        let totalDaraz = 0;
        let totalPickaboo = 0;
        let officialWarranty = 0;
        let unOfficialWarranty = 0;
        let withoutWarranty = 0;
        let usedPhone = 0;

        if (productLength) {
            setIsLoading(false);

            const filteredProducts = data?.map((item, index) => {
                const { phone_price, official_warranty, unofficial_warranty, no_warranty, used_phone, phone_link, ram, storage, brand, phone_details } = item;

                item.tags = [];

                const mainSensor = parseInt(phone_details?.mainCamera?.split(',')[0]);
                const cameras = phone_details?.mainCamera?.split(/[ ,]+/)?.filter(item => (item === 'MP'));
                const selfieCamera = parseInt(phone_details?.selfieCamera?.split(',')[0]);
                const snapdragonChip = phone_details?.chipset?.toLowerCase().includes('snapdragon');
                const amoledDisplay = phone_details?.displayType?.toLowerCase().includes('amoled');
                const specificPixels = phone_details?.displayRes?.toLowerCase().includes('1080');

                /* best value */
                if((phone_price <= 20000) && ((Number(ram)) >= 4) && ((Number(storage)) >= 64) && ((brand.toLowerCase().includes('xiaomi')) || (brand.toLowerCase().includes('realme')))){
                    item.tags?.push('best_value');
                }
                /* best camera */
                if((mainSensor >= 16 ) && (cameras.length >= 3) && (selfieCamera >= 13) && ((Number(storage) >= 64)) && phone_details.external?.includes('microSD')){
                    item.tags?.push('best_camera');
                }
                /* best performance */
                if((snapdragonChip) && (phone_price > 20000) && ((Number(ram)) > 4) && ((Number(storage)) >= 128) && (amoledDisplay) && (specificPixels)){
                    item.tags?.push('best_performance');
                }

                /* for showing the percentage of 3 sources */
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

                /* for showing phone conditions */
                if (phone_link?.includes('bikroy')) {
                    totalBikroy++;
                }
                else if (phone_link?.includes('daraz')) {
                    totalDaraz++;
                }
                else if (phone_link?.includes('pickaboo')) {
                    totalPickaboo++;
                } 

                return item;

            });
            setProducts(filteredProducts);

            const sourcesLength = totalBikroy + totalDaraz + totalPickaboo;

            setPercentage({
                bikroy: Math.round((totalBikroy / sourcesLength) * (100)),
                daraz: Math.round((totalDaraz / sourcesLength) * (100)),
                pickaboo: Math.round((totalPickaboo / sourcesLength) * (100)),
            });

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
        getProducts(productList);
    }, []);

    const alertMessage = (value: string, isSuccess: boolean) => {
        toast.dismiss(toastId.current);
        if (isSuccess) {
            toast.success(value, {
                theme: "light",
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
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
                phoneConditions,
                setSearchValue,
                searchValue
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