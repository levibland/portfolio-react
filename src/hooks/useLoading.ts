import { useContext } from 'react';
import { Context } from '../contexts/LoadingProvider';

const useLoading = () => {
    const { loading } = useContext(Context);
    return loading;
};

export default useLoading;