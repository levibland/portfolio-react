import React from 'react';

import './styles/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-item">
                <div className="footer-contact">
                    Email: <a href="mailto:levi.bland@icloud.com" className="footer-link">levi.bland@icloud.com</a>
                </div>
            </div>
            <div className="footer-item">
                &copy; {new Date().getFullYear()} Levi Bland. All Rights Reserved.
            </div>
            <div className="footer-item">
                <div className="footer-contact">
                    Tel: <a href="tel:+64272711452" className="footer-link">+64272711452</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;