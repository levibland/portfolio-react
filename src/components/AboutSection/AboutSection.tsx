import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';
import HeroButton from '../HeroButton';
import ScrollIcon from '../ScrollIcon';
import Quote from '../Quote';
import SectionTitle from '../SectionTitle';
import HomeCards from '../HomeCards';

import Typescript from '../../assets/tslogo.png';
import Rust from '../../assets/rustlogo.png';
import Reactlogo from '../../assets/reactlogo.png';

import './styles/AboutSection.scss';

function AboutSection() {
  const aureliusQuote = "\"A man's worth is no greater than his ambitions.\" - ";

  const card1 = {
    text: "TypeScript",
    img: Typescript,
  };

  const card2 = {
    text: "Rust",
    img: Rust,
  };

  const card3 = {
    text: "React",
    img: Reactlogo,
  }

  return (
    <main className="about">
        <div className="wrapper">
            <PrimaryHeader />
            <PrimarySub />
            <HeroButton text="My Portfolio" />
            <ScrollIcon />
            <Quote quote={aureliusQuote} name="Marcus Aurelius" />
            <SectionTitle text="Skills" />
            <HomeCards card1={card1} card2={card2} card3={card3} />
        </div>
    </main>
  );
}

export default AboutSection;