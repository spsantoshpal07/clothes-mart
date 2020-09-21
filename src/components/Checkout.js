import React from 'react';

import '../css/checkout.scss';

const Checkout = ({item}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={item.imageUrl} alt='item' />
            </div>

            <span className='name'>{item.name}</span>
            <span className='quantity'>{item.quantity}</span>
            <span className='price'>{item.price}</span>
            
            <div className='remove-button'>&#10007;</div>
        </div>
    )
}

export default Checkout;