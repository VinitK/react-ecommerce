import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div>
        <div className="header" />
        <div className="header navbar">
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
                <div className="option">
                    <Link to="/checkout">CHECKOUT</Link>
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
                <div className="option">
                    <CartIcon />
                </div>
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
);

export default connect(mapStateToProps)(Header);