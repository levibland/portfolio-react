import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';

import './styles/Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
        <Logo />
        <Navigation />
    </div>
  );
}

export default Navbar;