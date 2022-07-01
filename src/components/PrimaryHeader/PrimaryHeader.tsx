import React from 'react';
import useLoading from '../../hooks/useLoading';

import './styles/PrimaryHeader.scss';

function PrimaryHeader() {
  const loading = useLoading();

  return (
    <h1 className={`primary-header ${loading ? "slide-down" : ""}`}>
        <span>Hi, I'm</span>
        <span className="pink-text">&nbsp;Levi Bland</span>
    </h1>
  );
}

export default PrimaryHeader;