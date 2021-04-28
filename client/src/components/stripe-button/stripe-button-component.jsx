import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    //Stripes wants the price in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IkrBKDDB056dy7dNd3LHOiqkKxgInz9BFvjaS7ONsaG9VW2dC6cwh3Rby37vkX4RhBr4xFrxBCn4J52Byoxfz7f00PJxK517l'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;