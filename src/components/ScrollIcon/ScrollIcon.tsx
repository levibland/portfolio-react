import React from 'react';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/ScrollIcon.scss';

function ScrollIcon() {
    const loading = useLoading();

    return (
        <a href="#quote" id="quote">
            <div className={`${loading ? "scroll-icon pop-in" : "scroll-icon"} ${useShouldHide(510) ? "pop-out" : ""}`}>
                <span className="wheel"></span>
            </div>
        </a>
    );
}

export default ScrollIcon;