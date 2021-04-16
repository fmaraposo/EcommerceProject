export const addItemToCart = (cartItems, cartItemToAdd) => {
    //Checking if the item we are adding already exists in the Array
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        //if it exists we will create a new array by mapping the original array
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}