import {saveCredentials as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';
import {name} from './../feature';

export const action = ({username, password, isLoggedIn}) => {
	return {...Storage.save(name, {username, password}), isLoggedIn};
};

export default createAction(key, action);
