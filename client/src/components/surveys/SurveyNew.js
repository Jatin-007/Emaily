// SurveyNew is a parent of SurveyForm and SurveyReview
import SurveyForm from './SurveyForm';
import React, { Component } from 'react';

class SurveyNew extends Component {
    render () {
        return (
            <div className="animated fadeIn" style={{marginTop: '10px'}}>
                <fieldset style={{border: '0px double #253d3b', borderLeft: '4px solid #30b5ac', padding: '10px'}}>
                    <legend style={{fontSize: '19px'}}>Send out the survey email</legend>
                <SurveyForm/>
                </fieldset>
            </div>
        );
    }
}

export default SurveyNew;