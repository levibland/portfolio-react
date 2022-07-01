import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';

import './styles/AboutSection.scss';

function AboutSection() {
  return (
    <main className="about">
        <div className="wrapper">
            <PrimaryHeader />
            <PrimarySub />
        </div>
    </main>
  );
}

export default AboutSection;