// Survey form review shows users their form review after adding the values
import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            <h6>Please confirm your entries</h6>

            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    );
};

export default SurveyFormReview;