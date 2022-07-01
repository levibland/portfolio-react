import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';
import HeroButton from '../HeroButton';
import ScrollIcon from '../ScrollIcon';

import './styles/AboutSection.scss';

function AboutSection() {
  return (
    <main className="about">
        <div className="wrapper">
            <PrimaryHeader />
            <PrimarySub />
            <HeroButton text="My Portfolio" />
            <ScrollIcon />
        </div>
    </main>
  );
}

export default AboutSection;