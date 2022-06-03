import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ReactNode } from '../types/model';
import { productList, productProps } from '../components/data/products';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
    const [products, setProducts] = useState<productProps[]>([]);
    const [percentage, setPercentage] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const toastId = useRef<any>(null);

    const getProducts = () => {
        const productLength = productList.length;
        if(productLength){
            setIsLoading(false);
            setProducts(productList);
            
            let totalBikroy = 0;
            let totalDaraz = 0;
            let totalPickaboo = 0;

            productList.forEach(item => {
                if(item.phone_link?.includes('bikroy')){
                    totalBikroy++;
                }
                else if(item.phone_link?.includes('daraz')){
                    totalDaraz++;
                }
                else if(item.phone_link?.includes('pickaboo')){
                    totalPickaboo++;
                }
            });

            const sourcesLength = totalBikroy + totalDaraz + totalPickaboo;

            setPercentage({
                bikroy: Math.round((totalBikroy/sourcesLength) * (100)),
                daraz: Math.round((totalDaraz/sourcesLength) * (100)),
                pickaboo: Math.round((totalPickaboo/sourcesLength) * (100)),
            });
        }
        else{
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

    const ErrorMessages = ({ errors, inputName } : any) => {
        return (
            <ErrorMessage
                errors={errors}
                name={`${inputName}`}
                render={({ message }) => <p style={{ margin: 0, fontSize: "11px", color: "rgb(211, 47, 47)" }}>{message}</p>}
            />
        )
    }
    // console.log(productList)

    return (
        <UserContext.Provider
            value={{
                alertMessage,
                ErrorMessages,
                products,
                getProducts,
                isLoading,
                percentage
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