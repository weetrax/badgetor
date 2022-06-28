import LoadingScreen from '../components/_Layout/Loaders/LoadingScreen';
import React, { useState } from 'react';
import { LoadingScreenContext } from '../contexts/LoadingScreenContext';


export const LoadingScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [title, setTitle] = useState<string | undefined>(undefined)
    const [subTitle, setSubTitle] = useState<string | undefined>(undefined)

    return <LoadingScreenContext.Provider value={{ isLoading, setIsLoading, title, setTitle, subTitle, setSubTitle }}>
        {
            isLoading && <LoadingScreen title={title} description={subTitle} />
        }
        {children}
    </LoadingScreenContext.Provider>
}