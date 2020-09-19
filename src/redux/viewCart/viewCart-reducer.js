const INITIAL_VIEW_STATE = {
    hidden: true
};

const viewCartReducer = (state=INITIAL_VIEW_STATE, action) => {
    switch(action.type) {
        case 'VIEW_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default viewCartReducer;