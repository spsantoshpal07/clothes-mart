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

export const decreaseItemQuantity = (itemsAlreadyInCart, itemWhoseQuantityIsToBeDecrease) => {
    const existingItem = itemsAlreadyInCart.find(item => item.id === itemWhoseQuantityIsToBeDecrease.id);

    if(existingItem.quantity === 1) {
        return itemsAlreadyInCart.filter(item => item.id !== itemWhoseQuantityIsToBeDecrease.id)
    }

    return itemsAlreadyInCart.map(item => item.id === itemWhoseQuantityIsToBeDecrease.id
        ? { ...item, quantity: item.quantity -1}
        : item
    )
}