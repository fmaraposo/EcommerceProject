import { createSelector } from 'reselect';

//Input Selector -> Gets the all state, and returns a slice of it
const selectCart = state => state.cart;

//Memoize selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart => cart.cartItems)
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity * cartItem.price, 0)
)