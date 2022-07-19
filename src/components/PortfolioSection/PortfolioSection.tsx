import React from 'react';

import PrimaryHeader from '../PrimaryHeader';

import "./styles/PortfolioSection.scss";

function PortfolioSection() {
  return (
    <main className="portfolio">
        <div className="wrapper">
            <PrimaryHeader normal="My" pink="Portfolio" />
        </div>
    </main>
  );
}

export default PortfolioSection;