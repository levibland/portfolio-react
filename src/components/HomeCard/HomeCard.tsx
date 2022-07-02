import React from 'react';

import './styles/HomeCard.scss';

export interface HomeCardProps {
    text: string,
    img: string,
}

function HomeCard({ text, img }: HomeCardProps) {
    return (
        <div className="home-card">
            <img className="card-img" src={img} alt="Logo" />
            {text}
        </div>
    );
}

export default HomeCard;