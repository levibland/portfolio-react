import React from 'react';
import HomeCard from '../HomeCard';

import './styles/HomeCards.scss';

export interface CardInfo {
    text: string,
    img: string,
}

export interface HomeCardsProps {
    card1: CardInfo,
    card2: CardInfo,
    card3: CardInfo,
}

function HomeCards({ card1, card2, card3 }: HomeCardsProps) {
    return (
        <div className="cards">
            <HomeCard text={card1.text} img={card1.img} />
            <HomeCard text={card2.text} img={card2.img} />
            <HomeCard text={card3.text} img={card3.img} />
        </div>
    );
}

export default HomeCards;