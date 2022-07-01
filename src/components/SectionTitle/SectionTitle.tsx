import React from 'react';

import './styles/SectionTitle.scss';

export interface SectionTitleProps {
    text: string,
}

function SectionTitle({ text }: SectionTitleProps) {
    return (
        <div className="section-title-wrapper">
            <h1 className="section-title">
                {text}
                <span className="underline"></span>
            </h1>
        </div>
    );
}

export default SectionTitle;