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
    animate: number,
}

function HomeCards({ card1, card2, card3, animate }: HomeCardsProps) {
    return (
        <div className="cards">
            <HomeCard text={card1.text} img={card1.img} animate={animate} />
            <HomeCard text={card2.text} img={card2.img} animate={animate} />
            <HomeCard text={card3.text} img={card3.img} animate={animate} />
        </div>
    );
}

export default HomeCards;