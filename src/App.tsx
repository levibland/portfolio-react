import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingProvider from './contexts/LoadingProvider';

import Home from './views/Home';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Router>
    </LoadingProvider>
  )
}

export default App
