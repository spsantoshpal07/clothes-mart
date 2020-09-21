import React from 'react';

import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

import '../css/checkout-page.scss';

const CheckoutPage = ({cartItems, totalPrice}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>
                
                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => 
                    <Checkout key={item.id} item={item} />
                )
            }
            <div className='total'>
                <span>Total: ${totalPrice}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.itemsInCart.cartItems,
        totalPrice: state.itemsInCart.cartItems.reduce(
            (accumulator, item) => accumulator + (item.quantity * item.price), 0
        )
    }
}

export default connect(mapStateToProps)(CheckoutPage);