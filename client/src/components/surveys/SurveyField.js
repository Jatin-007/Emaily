// surveyfields contains logic to render single label and text input
import React from 'react';

const SurveyField = ({ input, label, meta:{error, touched} }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '2px'}} />
            <div className="red-text" style={{ marginBottom: '15px'}}>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;