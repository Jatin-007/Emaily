// SurveyNew is a parent of SurveyForm and SurveyReview
import SurveyForm from './SurveyForm';
import React, { Component } from 'react';

class SurveyNew extends Component {
    render () {
        return (
            <div>
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyNew;