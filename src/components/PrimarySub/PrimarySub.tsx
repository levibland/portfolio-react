import React from 'react';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import Word from './Word';

import './styles/PrimarySub.scss';

export interface PrimarySubComponents {
    sentence1: string,
    sentence2: string,
}

function PrimarySub({ sentence1, sentence2 }: PrimarySubComponents) {
    const loading = useLoading();

    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');

    return (
        <sub className="primary-sub">
            <div className={`line-wrapper ${loading ? "slide-left" : ""} ${useShouldHide(270) ? "slide-right" : ""}`}>
                {words1.map(word => <Word text={word} />)}
            </div>
            <div className={`line-wrapper ${loading ? "slide-right" : ""} ${useShouldHide(310) ? "slide-left" : ""}`}>
                {words2.map(word => <Word text={word} />)}
            </div>
        </sub>
    );
}

export default PrimarySub;