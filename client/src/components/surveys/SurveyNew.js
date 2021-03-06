// SurveyNew is a parent of SurveyForm and SurveyReview
import SurveyForm from './SurveyForm';
import {reduxForm} from 'redux-form';
import React, { Component } from 'react';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false }; 
    
    renderContent() {
        if(this.state.showFormReview){
            return <SurveyFormReview
            onCancel = {()=> this.setState({showFormReview: false})}
            />
        }
        else{
            return <SurveyForm 
            onSurveySubmit = {()=> this.setState({ showFormReview: true })}/>
        }
    }

    render () {
        return (
            <div className="animated fadeIn" style={{marginTop: '10px'}}>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);