import React, {Component} from 'react';
import Typed from 'react-typed';

class ReactTyped extends Component {
    render () {
        return (
            <div>
            <div style={{fontSize: 24}}>
                <Typed 
                    strings={['Collect Feedback', 'Analayze feedback', 'Get Valued']} 
                    typeSpeed={40}
                    backSpeed={20}
                />
            </div>

            <h6>An online platform to store all your feedback from your Customers</h6><br/>
            <h6>Tools used..</h6>

            <div style={{fontSize: 20}}>
                <Typed 
                    strings={
                        [ 'Node.js with Express', 'React + Redux', 'MongoDB' , ' Github' , 'GoogleOAuth API', 'STRIPE','SendGrid']
                    } 
                    typeSpeed={40}
                    backSpeed={20}
                    loop
                />
            </div>
        </div>
        )
    };
};

export default ReactTyped;
