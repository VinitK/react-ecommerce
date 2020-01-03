import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='item-block image-container'>
            <img src={imageUrl} alt='product' />
        </div>
        <span className='item-block name'>{name}</span>
        <div className='item-block quantity'><span className='button large'>–</span>{quantity}<span className='button large'>+</span></div>
        <span className='item-block price'>{price}</span>
        <div className='item-block remove'><span className='button'>&#10005;</span></div>
    </div >
)

export default CheckoutItem;