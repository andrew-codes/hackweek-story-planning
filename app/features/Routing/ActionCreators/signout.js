import {signout as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = () => {
	const loggedOutUser = {username: 'null', password: 'null'};
	return Storage.saveAll(loggedOutUser)
		.then(() => loggedOutUser);
};

export default createAction(key, action);