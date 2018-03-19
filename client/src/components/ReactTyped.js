import React, {Component} from 'react';
import Typed from 'react-typed';

class ReactTyped extends Component {
    render () {
        return (
            <div>
                <Typed 
                    strings={['Collect Feedback', 'Analayze feedback', 'Get Valued']} 
                    typeSpeed={40}
                    backSpeed={20}
                    loop
                />
            </div>
        )
    };
};

export default ReactTyped;
