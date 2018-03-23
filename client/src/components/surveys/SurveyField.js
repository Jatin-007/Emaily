// surveyfields contains logic to render single label and text input
import React from 'react';

const SurveyField = ({ input }) => {
    
    return (
        <div>
            <input {...input}  />
        </div>
    );
};

export default SurveyField;