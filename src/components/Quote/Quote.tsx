import React from 'react';

import './styles/Quote.scss';

export interface QuoteProps {
    quote: string,
    name: string,
}

function Quote({ quote, name }: QuoteProps) {
    return (
        <div className="quote-wrapper">
            <span>{quote}</span>
            <span className="pink-text">&nbsp;{name}</span>
        </div>
    );
}

export default Quote;