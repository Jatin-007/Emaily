import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // ability to provide connections to actions provided in redux
import * as actions from '../actions'; // fetching all the actions inside the actions directory
//BrowserRouter: how to behave at certain levels, Route: used to setup rule to the linke the user might visit

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends Component {
    componentDidMount() {
         this.props.fetchUser();
    }

    render () {
        return (
            <div className = "container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component ={Landing}/>
                        <Route exact path = "/surveys" component = {Dashboard}/>
                        <Route path = "/surveys/new" component = {SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);

// we are using import at the front end as webpack and babel provides ES2015 syntax
// for Node.js, it only provides the common syntax. Hence, we are using require at backend

// BrowserROuter can only take 1 tag inside

// exact = {true}  it is used to verify the path if it is similar to the provided one, so as it does not shows up in the rest of the paths set as well