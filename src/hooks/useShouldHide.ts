import useScrollY from './useScrollY';

const useShouldHide = (y: number) => {
    let scrollY = useScrollY();

    console.log(scrollY);

    if (y < scrollY) return true;

    return false;
};

export default useShouldHide;