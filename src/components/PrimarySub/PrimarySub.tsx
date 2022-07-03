import React from 'react';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import Word from './Word';

import './styles/PrimarySub.scss';

function PrimarySub() {
    const loading = useLoading();

    return (
        <sub className="primary-sub">
            <div className={`line-wrapper ${loading ? "slide-left" : ""} ${useShouldHide(270) ? "slide-right" : ""}`}>
                <Word text="I'm" />
                <Word text="a" />
                <Word text="software" />
                <Word text="engineer" />
                <Word text="based" />
                <Word text="in" />
                <Word text="Auckland," />
                <Word text="New" />
                <Word text="Zealand" />
            </div>
            <div className={`line-wrapper ${loading ? "slide-right" : ""} ${useShouldHide(310) ? "slide-left" : ""}`}>
                <Word text="Get" />
                <Word text="in" />
                <Word text="touch" />
                <Word text="and" />
                <Word text="let's" />
                <Word text="make" />
                <Word text="something" />
                <Word text="special" />
            </div>
        </sub>
    );
}

export default PrimarySub;