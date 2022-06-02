import React, { createContext, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ReactNode } from '../types/model';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
    const toastId = useRef<any>(null);

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
                render={({ message }) => <p style={{ margin: 0, fontSize: "14px", color: "#d32f2f" }}>{message}</p>}
            />
        )
    }

    return (
        <UserContext.Provider
            value={{
                alertMessage,
                ErrorMessages
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