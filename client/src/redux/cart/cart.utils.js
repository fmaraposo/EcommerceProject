export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log('CartItemsAddItem', cartItems);
    //Checking if the item we are adding already exists in the Array
    const existingCartItem = cartItems && cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems && cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    console.log('ExistingCartItem', existingCartItem)
    
    //If the quantity === 1 remove the item
    if(existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //If the quantity > 1 keep the same cartItem and reduce -1 quantiy
    return cartItems && cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem // otherwise just return the cartItem
        )
}