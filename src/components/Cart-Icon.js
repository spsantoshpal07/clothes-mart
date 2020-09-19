import React from 'react';

import { ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import '../css/cart-icon.scss';
import { viewCart } from '../redux/cart/viewCart-action';

const CartIcon = ({ viewCart }) => {
    return (
        <div className='cart-icon' onClick={viewCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        viewCart: () => dispatch(viewCart())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);