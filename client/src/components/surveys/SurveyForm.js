// adding users over here
import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form'; // helps to communicate with the redux store to transfer the information
import {Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    {label: 'Survey Title', name:'Title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name:'body'},
    {label: 'Recipient List', name:'emails'},
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name})=> {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render () {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button className="teal btn-flat right white-text" type="submit">Next<i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); // similar to connect helper