import { checkDuplicateItemsInCart } from './cart-utility';

const INITIAL_CART_ITEM_STATE = {
    cartItems: []
};

const cartItemsReducer = (state=INITIAL_CART_ITEM_STATE, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            console.log(state.cartItems)
            return {
                ...state,
                cartItems: checkDuplicateItemsInCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartItemsReducer;