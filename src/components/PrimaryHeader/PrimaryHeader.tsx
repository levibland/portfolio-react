import React, { useEffect } from 'react';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/PrimaryHeader.scss';

function PrimaryHeader() {
  const loading = useLoading();

  return (
    <h1 className={`primary-header ${loading ? "slide-down" : ""} ${useShouldHide(130) ? "slide-left" : ""}`}>
        <span>Hi, I'm</span>
        <span className="pink-text">&nbsp;Levi Bland</span>
    </h1>
  );
}

export default PrimaryHeader;