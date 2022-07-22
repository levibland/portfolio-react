import React from 'react';

import PrimaryHeader from '../PrimaryHeader';
import PrimarySub from '../PrimarySub';

import "./styles/PortfolioSection.scss";

function PortfolioSection() {
  return (
    <main className="portfolio">
        <div className="wrapper">
            <PrimaryHeader normal="My" pink="Portfolio" />
            <PrimarySub sentence1={"A collection of my biggest projects"} sentence2={""} />
        </div>
    </main>
  );
}

export default PortfolioSection;