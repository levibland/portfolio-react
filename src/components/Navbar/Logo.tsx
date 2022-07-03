import React from 'react';
import { Link } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';

import './styles/Logo.scss';

function Logo() {
  const loading = useLoading();

  return (
    <div className={loading ? "logo-wrapper slide-right" : "logo-wrapper"}>
        <Link to="/">
            <h1 className="logo">
                Levi <span className="pink-text">Bland</span>
            </h1>
        </Link>
    </div>
  );
}

export default Logo;