import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = ()=> {
    return function(dispatch) {
    axios.get('/api/current_user') //only putting relative path to reuse it in production environment
    .then(res => dispatch({type: FETCH_USER, payload: res}));
    }
};