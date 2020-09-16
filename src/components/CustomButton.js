import React from 'react';

import '../css/custom-button.scss';

const CustomButton = ({ children, ...otherButtonProps}) => {
    return (
        <button className='custom-button' {...otherButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton;