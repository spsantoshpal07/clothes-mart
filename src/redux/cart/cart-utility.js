export const checkDuplicateItemsInCart = (itemsAlreadyInCart, itemToAddInCart) => {
    
    const duplicateItem = itemsAlreadyInCart.find(item => item.id === itemToAddInCart.id);

    if(duplicateItem) {
        return itemsAlreadyInCart.map(
            item => item.id === itemToAddInCart.id
                ? {...item, quantity: item.quantity+1}
                : item
        )
    }

    return [ ...itemsAlreadyInCart, { ...itemToAddInCart, quantity: 1 } ]
}