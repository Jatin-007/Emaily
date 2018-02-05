import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers ({
    auth: authReducer
    // whatever keys are provided here has to be provided in store as well
});