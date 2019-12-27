import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherPartOfProps }) => (
    <button className={isGoogleSignIn ? "google-sign-in custom-button" : "custom-button"} {...otherPartOfProps}>
        {children}
    </button>
)

export default CustomButton;