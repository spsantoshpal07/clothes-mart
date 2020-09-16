import React from 'react';

import '../css/custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton;