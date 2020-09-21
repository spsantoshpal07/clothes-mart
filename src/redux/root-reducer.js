import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import viewCartReducer from './cart/viewCart-reducer';
import cartItemsReducer from './cart/cartItems-reducer';

export default combineReducers({
    user: userReducer,
    viewCart: viewCartReducer,
    itemsInCart: cartItemsReducer,
})