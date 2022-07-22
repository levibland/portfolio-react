import React from 'react';

import LoadingProvider from '../contexts/LoadingProvider';

import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

function Home() {
  return (
    <LoadingProvider>
        <Navbar />
        <AboutSection />
    </LoadingProvider>
  );
}

export default Home;