import React from 'react';

import CustomButton from './CustomButton';

import '../css/view-cart.scss';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import ItemsInViewCart from './ItemsInViewCart';
import { viewCart } from '../redux/cart/viewCart-action';

const ViewCart = ({cartItems, history, viewCart}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <ItemsInViewCart key={item.id} item={item} />
                        ))
                        : <span style={{fontSize:'16px', margin: '50px auto'}}>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={ () => {
                    history.push('/checkout');
                    viewCart()
                }
            } >GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.itemsInCart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        viewCart: () => dispatch(viewCart())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewCart));