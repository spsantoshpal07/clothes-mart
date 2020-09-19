import React from 'react';

import '../css/ListShopItems.scss';
import CustomButton from './CustomButton';

import { connect } from 'react-redux';
import { addNewItemToCart } from '../redux/cart/cartItems-action';

const ListShopItems = ({ item, addNewItemToCart }) => {

    var onAddToCartClick = () => addNewItemToCart(item)

    return (
        <div className='collection-item'>
            <div className='image' 
                style={{ backgroundImage: `url(${item.imageUrl})`}} />
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>${item.price}</span>
            </div>
            <CustomButton onClick={onAddToCartClick} inverted> Add to cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addNewItemToCart: item => dispatch(addNewItemToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(ListShopItems);