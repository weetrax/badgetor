import { LoadingScreenContext } from '../contexts/LoadingScreenContext';
import { useContext, useEffect } from 'react';

export const useLoadingScreen = (loading: boolean, title?: string, subTitle?: string) => {

    const { setIsLoading, setTitle, setSubTitle } = useContext(LoadingScreenContext);

    useEffect(() => {
        setIsLoading(loading);
        setTitle(title)
        setSubTitle(subTitle)
    }, [loading, title, subTitle])
}