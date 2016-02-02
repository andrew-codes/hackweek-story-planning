import {saveCredentials as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = ({username, password, isLoggedIn}) => {
	return {...Storage.save('credentials', {username, password}), isLoggedIn};
};

export default createAction(key, action);
