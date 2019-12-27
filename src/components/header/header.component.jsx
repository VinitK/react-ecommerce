import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Link to="/" className="logo">
                <h1>Gaurav Traders</h1>
            </Link>
        </div>
        <div className="options">
            <div className="option">
                <Link to="/shop">SHOP</Link>
            </div>
            <div className="option">
                <Link to="/contact">CONTACT</Link>
            </div>
            {
                currentUser ?
                    <div className='option'>
                        <Link to="/signin" onClick={() => auth.signOut()}>SIGN OUT</Link>
                    </div>
                    :
                    <div className="option">
                        <Link to="/signin">SIGN IN</Link>
                    </div>
            }
        </div>
    </div>
);

export default Header;