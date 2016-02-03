import {authenticationComplete as key} from './../actions';
import {createAction} from 'redux-actions';

export const action = isLoggedIn => isLoggedIn;

export default createAction(key, action)
