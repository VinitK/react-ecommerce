import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherPartOfProps }) => (
    <button className={`custom-button ${isGoogleSignIn ? "google-sign-in" : inverted ? "inverted" : ""}`} {...otherPartOfProps}>
        {children}
    </button>
)

export default CustomButton;