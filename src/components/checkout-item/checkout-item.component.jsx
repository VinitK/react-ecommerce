import React from 'react';
import { connect } from 'react-redux';

import { removeItem, addItem, reduceQuantityByOne } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceQuantityByOne }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='item-block image-container'>
                <img src={imageUrl} alt='product' />
            </div>
            <span className='item-block name'>{name}</span>
            <div className='item-block quantity'><div className='button large' onClick={() => addItem(cartItem)}><span>+</span></div>{quantity}<div className='button large' onClick={() => reduceQuantityByOne(cartItem)}><span>–</span></div></div>
            <span className='item-block price'>₹{price}</span>
            <div className='item-block remove' onClick={() => removeItem(cartItem)}><div className='button'><span>&#10005;</span></div></div>
        </div >
    )
}

const mapDispatchToProps = dispatch => (
    {
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        reduceQuantityByOne: item => dispatch(reduceQuantityByOne(item))
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem);