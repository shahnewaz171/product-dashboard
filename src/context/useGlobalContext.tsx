import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ReactNode } from '../types/model';
import { productList, productProps } from '../components/data/products';
import axios from 'axios';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
    const [products, setProducts] = useState<productProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const toastId = useRef<any>(null);

    const getProducts = () => {
        if(productList.length){
            setIsLoading(false);
            setProducts(productList);
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

    return (
        <UserContext.Provider
            value={{
                alertMessage,
                ErrorMessages,
                products,
                getProducts,
                isLoading
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