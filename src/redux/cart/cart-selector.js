import { createSelector } from 'reselect';

//Selector------------------->
const itemsInCartSelector = state => state.itemsInCart;

export const cartItemsSelector = createSelector(
    [itemsInCartSelector],
    itemsInCart => itemsInCart.cartItems
)