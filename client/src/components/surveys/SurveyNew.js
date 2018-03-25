// SurveyNew is a parent of SurveyForm and SurveyReview
import SurveyForm from './SurveyForm';
import React, { Component } from 'react';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false }; 
    
    renderContent() {
        if(this.state.showFormReview){
            return <SurveyFormReview/>
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

export default SurveyNew;