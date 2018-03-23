import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form'; // changed the name of the function from reducer to reduxForm
import authReducer from './authReducer';

export default combineReducers ({
    auth: authReducer,
    // whatever keys are provided here has to be provided in store as well
    form: reduxForm
});