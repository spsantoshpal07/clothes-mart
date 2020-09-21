import React from 'react';

import { ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import '../css/cart-icon.scss';
import { viewCart } from '../redux/cart/viewCart-action';

const CartIcon = ({ viewCart, cartItemsTotalQuantity }) => {
    return (
        <div className='cart-icon' onClick={viewCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsTotalQuantity}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        viewCart: () => dispatch(viewCart())
    }
}

const mapStateToProps = state => {
    // console.log('i m being called')
    return {
        cartItemsTotalQuantity: state.itemsInCart.cartItems.reduce(
            (accumulator, item) => accumulator+item.quantity, 0 )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);