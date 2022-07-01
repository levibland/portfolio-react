import React from 'react';
import useLoading from '../../hooks/useLoading';

import './styles/ScrollIcon.scss';

function ScrollIcon() {
    return (
        <a href="#quote" id="quote">
            <div className="scroll-icon">
                <span className="wheel"></span>
            </div>
        </a>
    );
}

export default ScrollIcon;