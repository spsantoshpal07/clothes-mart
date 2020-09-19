import React from 'react';

import CustomButton from './CustomButton';

import '../css/view-cart.scss';
import { connect } from 'react-redux';
import ItemsInViewCart from './ItemsInViewCart';

const ViewCart = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item => (
                        <ItemsInViewCart key={item.id} item={item} />
                    ))
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.itemsInCart.cartItems
    }
}

export default connect(mapStateToProps)(ViewCart);