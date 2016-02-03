import {loadUser as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = user => user;

export default createAction(key, action);