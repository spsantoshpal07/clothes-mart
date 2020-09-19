import React from 'react';

import CustomButton from './CustomButton';

import '../css/view-cart.scss';

const ViewCart = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default ViewCart;