import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <h1 className="logo">Gaurav Traders</h1>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
        </div>
    </div>
);

export default Header;