// Survey form review shows users their form review after adding the values
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    return (
        <div>
            <h6>Please confirm your entries</h6>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>e-mail Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipients list</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>Back</button>

            <button type="submit" onClick= {()=> submitSurvey(formValues, history)} className="green btn-flat right white-text">Send Survey<i className="material-icons right">email</i></button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
// since we are connecting funtion mapStateToProps with SurveyFormReview
// surveyFormReview is able to fetch all the data passed out...