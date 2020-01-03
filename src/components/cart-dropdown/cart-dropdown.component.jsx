import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ?
                <div>
                    <div className='cart-items'>
                        {

                            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        }
                    </div>
                    <CustomButton inverted onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}>CHECKOUT</CustomButton>
                </div>
                :
                <div>
                    <p className='empty-message'>Your cart is empty!</p>
                    <div className="marginadd">
                        <CustomButton inverted onClick={() => history.push('/shop')}>SHOP NOW</CustomButton>
                    </div>
                </div>
        }
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
)

export default withRouter(connect(mapStateToProps)(CartDropdown));