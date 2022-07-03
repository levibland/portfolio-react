import React from 'react';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/SectionTitle.scss';

export interface SectionTitleProps {
    text: string,
    show: number,
}

function SectionTitle({ text, show }: SectionTitleProps) {
    return (
        <div className="section-title-wrapper">
        <h1 className={`section-title ${useShouldHide(show) ? "" : "slide-down"}`}>
                {text}
                <span className={`underline ${useShouldHide(show) ? "" : "slide-up"}`}></span>
            </h1>
        </div>
    );
}

export default SectionTitle;