import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'; // importing the stripeCheckout method to the Payment.js file
import  {connect} from 'react-redux'; // Connecting it with Redux 
import * as actions from '../actions'; 


class Payments extends Component {
    render () {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount = {500}
                token={token => this.props.handleToken(token)} 
                // token is expecting to recieve a
                // callback function which will be called after 
                // we have recieved the authorization

                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);