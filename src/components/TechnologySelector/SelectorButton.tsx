import React from 'react';

import './styles/SelectorButton.scss';

export interface SelectorButtonProps {
    text: string,
}

function SelectorButton({ text }: SelectorButtonProps) {
  return (
    <div className="selector-button">
      <div className="selector-button-top">{text}</div>
      <div className="selector-button-bottom">{text}</div>
    </div>
  );
}

export default SelectorButton;