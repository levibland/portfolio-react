import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollYProvider from './contexts/ScrollYProvider';

import Home from './views/Home';
import Portfolio from './views/Portfolio';

function App() {
  return (
    <ScrollYProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
        </Routes>
      </Router>
    </ScrollYProvider>
  )
}

export default App
