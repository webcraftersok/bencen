"use client";

import React, { createContext, useState } from 'react';


interface storeContextProvider {
    children: React.ReactNode
}

interface storeProps {
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}


export const store = createContext<storeProps | null>(null);


export default function StoreContextProvider({ children }: storeContextProvider) {
    const [language, setLanguage] = useState('english')

    return (
        <store.Provider
            value={{ language, setLanguage }}>
            {children}
        </store.Provider>
    );
}




