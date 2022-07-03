import { useContext } from 'react';
import { Context } from '../contexts/ScrollYProvider';

const useScrollY = () => {
    const { scrollY } = useContext(Context);
    return scrollY;
};

export default useScrollY;