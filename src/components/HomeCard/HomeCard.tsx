import React from 'react';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/HomeCard.scss';

export interface HomeCardProps {
    text: string,
    img: string,
    animate: number,
}

function HomeCard({ text, img, animate }: HomeCardProps) {
    return (
        <div className={`home-card ${useShouldHide(animate) ? "" : "animate"}`}>
            <img className="card-img" src={img} alt="Logo" />
            {text}
        </div>
    );
}

export default HomeCard;