import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkoutpage.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => {
    const HEADER_TITLES = ['product', 'particular', 'quantity', 'price', 'remove'];
    return (
        <div className='checkout-page'>
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
            <span>TOTAL: ₹{cartTotal}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartTotal: selectCartTotal
    }
)

export default connect(mapStateToProps)(CheckoutPage);