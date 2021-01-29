import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type:CartActionTypes.TOOGLE_CART_HIDDEN
})

//A function that will have the item we want to add to this array, and will return a new type.action object
export const addItem = item => ({
    //Tells cart reducer, hey I'm trying to add this item.
    type: CartActionTypes.ADD_ITEM,
    // The payload is the item we want to add to the array
    payload: item
})