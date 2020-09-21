export const addNewItemToCart = item => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    }
}

export const onDeleteItemClick = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: item
    }
}

export const onItemQuantityDecrease = (item) => {
    return {
        type: 'QUANTITY_DECREASE',
        payload: item
    }
}