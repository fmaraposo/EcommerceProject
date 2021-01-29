import {CartActionTypes} from './cart.types'

const INITIAL_STATE = {
    hidden:true
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                //If it's true I want it to be false
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer;