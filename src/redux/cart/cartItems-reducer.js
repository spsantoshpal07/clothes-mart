import { checkDuplicateItemsInCart, decreaseItemQuantity } from './cart-utility';


//Reducer-------------------->
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

        case 'DELETE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case 'QUANTITY_DECREASE':
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartItemsReducer;

