import React, { createContext, useEffect, useState } from 'react';

export interface LoadingContext {
    loading: boolean,
}

export interface Children {
    children: React.ReactNode,
}

export const Context = createContext<LoadingContext>({ loading: false });

export const LoadingProvider = ({ children }: Children) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    return (
        <Context.Provider value={{ loading }}>{children}</Context.Provider>
    );
}

export default LoadingProvider;