import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkoutpage.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const CheckoutPage = ({ cartItems, cartTotal, history }) => {
    const HEADER_TITLES = ['product', 'particular', 'quantity', 'price', 'remove'];
    return (
        <div className='checkout-page'>
            {cartItems.length ?
                (
                    <div className="checkout-block">
                        <div className='checkout-header'>
                            {HEADER_TITLES.map((title, index) => (
                                <div key={index} className={`header-block ${title}`}>
                                    <span>{title}</span>
                                </div>
                            ))}
                        </div>
                        {cartItems.map(cartItem => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        ))}
                        <span className="total">Total: ₹{cartTotal}</span>
                    </div>
                ) : (
                    <div>
                        <div className='empty-cart'>Your cart is empty!</div>
                        <CustomButton inverted onClick={() => history.push('/shop')}>Shop Now</CustomButton>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartTotal: selectCartTotal
    }
)

export default withRouter(connect(mapStateToProps)(CheckoutPage));