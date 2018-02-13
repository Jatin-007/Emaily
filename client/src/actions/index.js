import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user') //only putting relative path to reuse it in production environment
        
    dispatch({type: FETCH_USER, payload: res.data});
};

// fetchUser is a function which calls another function with dispatch as the variable inside.

export const handleToken = (token) => async (dispatch ) => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data});
};