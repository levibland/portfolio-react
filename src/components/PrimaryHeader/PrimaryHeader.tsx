import React, { useEffect } from 'react';
import useLoading from '../../hooks/useLoading';
import useShouldHide from '../../hooks/useShouldHide';

import './styles/PrimaryHeader.scss';

export interface PrimaryHeaderProps {
  normal: string,
  pink: string,
}

function PrimaryHeader({ normal, pink }: PrimaryHeaderProps) {
  const loading = useLoading();

  return (
    <h1 className={`primary-header ${loading ? "slide-down" : ""} ${useShouldHide(130) ? "slide-left" : ""}`}>
        <span>{normal}</span>
        <span className="pink-text">&nbsp;{pink}</span>
    </h1>
  );
}

export default PrimaryHeader;