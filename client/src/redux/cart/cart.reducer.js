import {CartActionTypes} from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                //If it's true I want it to be false
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //We are spreading all the array values and then any additional values, will appear in the very end of this array.
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                ) 
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload) 
            }
        default:
            return state
    }
}

export default cartReducer;