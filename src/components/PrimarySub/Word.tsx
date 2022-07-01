import React, { useState, useEffect } from 'react';

import './styles/Word.scss';

export interface WordProps {
    text: string,
}

function Word({ text }: WordProps) {
    const [active, setActive] = useState(false);

    const makeActive = () => {
        if (active == false) {
            setActive(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setActive(false);
        }, 2000);
    }, [active]);

    return (
        <div className={`word ${active ? "active" : ""}`} onMouseEnter={() => makeActive()}>
            <div className="word-top">{text}</div>
            <div className="word-bottom">{text}</div>
        </div>
    );
}

export default Word;