import {saveCredentials as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = ({username, password, isLoggedIn}) => {
	return Storage.saveAll({username, password})
		.then(() => ({
			username,
			password,
			isLoggedIn
		}));
};

export default createAction(key, action);
