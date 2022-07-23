import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';
import TechnologySelector from '../TechnologySelector';

import "./styles/PortfolioSection.scss";

function PortfolioSection() {
  return (
    <main className="portfolio">
        <div className="wrapper">
            <PrimaryHeader normal="My" pink="Portfolio" />
            <PrimarySub sentence1={"A collection of my biggest projects"} sentence2={""} />
            <TechnologySelector />
        </div>
    </main>
  );
}

export default PortfolioSection;