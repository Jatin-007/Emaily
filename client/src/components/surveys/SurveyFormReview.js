// Survey form review shows users their form review after adding the values
import React from 'react';
import {connect} from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
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
                    <div>{formValues.emails}</div>
                </div>
            </div>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);