import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Logo.scss';

function Logo() {
  return (
    <div className="logo-wrapper">
        <Link to="/">
            <h1 className="logo">
                Levi <span className="pink-text">Bland</span>
            </h1>
        </Link>
    </div>
  );
}

export default Logo;