// surveyfields contains logic to render single label and text input
import React from 'react';

const SurveyField = ({ input, label, meta }) => {
    console.log(meta);
    return (
        <div>
            <label>{label}</label>
            <input {...input}  />
            {meta.error}
        </div>
    );
};

export default SurveyField;