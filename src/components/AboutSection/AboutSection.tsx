import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';
import HeroButton from '../HeroButton';
import ScrollIcon from '../ScrollIcon';
import Quote from '../Quote';
import SectionTitle from '../SectionTitle';
import HomeCards from '../HomeCards';
import Footer from '../Footer';

import Typescript from '../../assets/tslogo.png';
import Rust from '../../assets/rustlogo.png';
import Reactlogo from '../../assets/reactlogo.png';
import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedinlogo.png';
import Resume from '../../assets/resumelogo.png';

import './styles/AboutSection.scss';

function AboutSection() {
  const aureliusQuote = "\"A man's worth is no greater than his ambitions.\" - ";
  const senecaQuote = "\"If a man knows not which port he sails, no wind is favorable.\" - ";

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
  };

  const card4 = {
    text: "Github",
    img: Github,
  };

  const card5 = {
    text: "Linkedin",
    img: Linkedin,
  };

  const card6 = {
    text: "Resume",
    img: Resume,
  }

  return (
    <main className="about">
        <div className="wrapper">
            <PrimaryHeader />
            <PrimarySub />
            <HeroButton text="My Portfolio" />
            <ScrollIcon />
            <Quote quote={aureliusQuote} name="Marcus Aurelius" />
            <SectionTitle text="Skills" show={930} />
            <HomeCards card1={card1} card2={card2} card3={card3} animate={1050} />
            <Quote quote={senecaQuote} name="Seneca" />
            <SectionTitle text="Info" show={2010} />
            <HomeCards card1={card4} card2={card5} card3={card6} animate={2090} />
        </div>
        <Footer />
    </main>
  );
}

export default AboutSection;