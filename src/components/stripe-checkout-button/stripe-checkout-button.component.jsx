import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-checkout-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0YYKsK2o2Kt0F4Bg8UXXYQeo00P7YSxESv';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Gaurav Traders'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay'
            currency='INR'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;