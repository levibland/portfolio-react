import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';

import './styles/Navigation.scss';

function Navigation() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const loading = useLoading();

    return (
        <div>
            <input className="nav-checkbox" type="checkbox" id="nav-toggle" checked={open} onClick={toggle} />
            <label className={loading ? "nav-button slide-left" : "nav-button"} htmlFor="nav-toggle">
                <div className="nav-line"></div>
                <div className="nav-line"></div>
                <div className="nav-line"></div>
            </label>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" onClick={toggle} className="nav-link"><span className="white">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" onClick={toggle} className="nav-link"><span className="white">Portfolio</span></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;