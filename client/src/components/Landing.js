import React from 'react';
import ReactTyped from './ReactTyped';

const Landing = ()=> {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>
                Emaily!!!
            </h1>
            <div className= "z-depth-4" style={{backgroundColor: '#168e76', color: 'white', padding: 12, borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                <p>
                    <ReactTyped/>
                </p>
            </div>
        </div>
    );
};

export default Landing;