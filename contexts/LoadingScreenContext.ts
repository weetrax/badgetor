import React from 'react';

type LoadingScreenContextType = {
    isLoading: boolean,
    setIsLoading: (
        open: boolean
    ) => void
    title?: string,
    setTitle: (
        title?: string
    ) => void,
    subTitle?: string,
    setSubTitle: (
        subTitle?: string
    ) => void
}

export const LoadingScreenContext = React.createContext<LoadingScreenContextType>({
    isLoading: false,
    setIsLoading: () => { },
    title: undefined,
    setTitle: () => { },
    subTitle: undefined,
    setSubTitle: () => { },
})