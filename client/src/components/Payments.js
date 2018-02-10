import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render () {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount = {500}
                token={token => console.log(token)} 
                // token is expecting to recieve a
                //callback function which will be called after 
                //we have recieved the authorization

                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default Payments;