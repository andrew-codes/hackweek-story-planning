import {logout as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = () => {
	return Storage.removeAll('username', 'password');
};

export default createAction(key, action);