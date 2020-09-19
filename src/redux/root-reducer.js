import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import viewCartReducer from './viewCart/viewCart-reducer';

export default combineReducers({
    user: userReducer,
    cart: viewCartReducer
})