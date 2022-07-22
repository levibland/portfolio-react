import React from 'react';

import LoadingProvider from '../contexts/LoadingProvider';

import Navbar from '../components/Navbar';
import PortfolioSection from '../components/PortfolioSection';

function Portfolio() {
    return (
        <LoadingProvider>
            <Navbar />
            <PortfolioSection />
        </LoadingProvider>
    );
}

export default Portfolio;