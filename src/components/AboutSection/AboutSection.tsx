import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';
import HeroButton from '../HeroButton';
import ScrollIcon from '../ScrollIcon';
import Quote from '../Quote';

import './styles/AboutSection.scss';

function AboutSection() {
  const aureliusQuote = "\"A man's worth is no greater than his ambitions.\" - ";

  return (
    <main className="about">
        <div className="wrapper">
            <PrimaryHeader />
            <PrimarySub />
            <HeroButton text="My Portfolio" />
            <ScrollIcon />
            <Quote quote={aureliusQuote} name="Marcus Aurelius" />
        </div>
    </main>
  );
}

export default AboutSection;