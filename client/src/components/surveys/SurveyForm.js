// adding users over here
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // helps to communicate with the redux store to transfer the information

class SurveyForm extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    <Field 
                    type="text"
                    name="surveyTitle"
                    component = "input"
                    placeholder = "input here"
                    />

                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); // similar to connect helper