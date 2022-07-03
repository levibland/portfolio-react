import React, { createContext, useEffect, useState } from 'react';

export interface ScrollYContext {
    scrollY: number,
}

export interface Children {
    children: React.ReactNode,
}

export const Context = createContext<ScrollYContext>({ scrollY: 0 });

export const ScrollYProvider = ({ children }: Children) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);

        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });
    }, []);

    return (
        <Context.Provider value={{ scrollY }}>{children}</Context.Provider>
    );
};

export default ScrollYProvider;