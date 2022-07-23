import React from 'react';
import useLoading from '../../hooks/useLoading';

import './styles/TechnologySelector.scss';

import SelectorButton from './SelectorButton';

function TechnologySelector() {
    const loading = useLoading();

    return (
        <div className={`selector-wrapper ${loading ? "slide-right" : ""}`}>
            <SelectorButton text="Rust" />
            <SelectorButton text="JS" />
            <SelectorButton text="React" />
            <SelectorButton text="SCSS" />
        </div>
    );
}

export default TechnologySelector;