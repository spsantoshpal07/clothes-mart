import React from 'react';

import { connect } from 'react-redux';

import '../css/checkout.scss';
import { addNewItemToCart, onDeleteItemClick, onItemQuantityDecrease } from '../redux/cart/cartItems-action';

const Checkout = ({item, onDeleteItemClick, onItemQuantityDecrease, addNewItemToCart}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={item.imageUrl} alt='item' />
            </div>

            <span className='name'>{item.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => onItemQuantityDecrease(item)}>&#10094;</div>
                    <span className='value'>{item.quantity}</span>
                <div className='arrow' onClick={() => addNewItemToCart(item)}>&#10095;</div>
            </span>
            <span className='price'>${item.price}</span>
            
            <div className='remove-button' onClick={() => onDeleteItemClick(item)}>&#10007;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItemClick: (item) => dispatch(onDeleteItemClick(item)),
        onItemQuantityDecrease: (item) => dispatch(onItemQuantityDecrease(item)),
        addNewItemToCart: (item) => dispatch(addNewItemToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(Checkout);