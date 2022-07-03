import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingProvider from './contexts/LoadingProvider';
import ScrollYProvider from './contexts/ScrollYProvider';

import Home from './views/Home';

function App() {
  return (
    <LoadingProvider>
      <ScrollYProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </Router>
      </ScrollYProvider>
    </LoadingProvider>
  )
}

export default App
