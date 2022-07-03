import React from 'react';
import { Link } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/HeroButton.scss'; 

export interface HeroButtonProps {
    text: string,
}

function HeroButton({ text }: HeroButtonProps) {
    const loading = useLoading();

    return (
        <Link to="/" className={`hero-button ${loading ? "slide-up" : ""} ${useShouldHide(395) ? "slide-down" : ""}`}>
            <button className="button-top">{text}</button>
            <button className="button-bottom">{text}</button>
        </Link>
    );
}

export default HeroButton;