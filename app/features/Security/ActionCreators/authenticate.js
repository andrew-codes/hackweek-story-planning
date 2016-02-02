import {authenticate as key} from './../actions';
import {createAction} from 'redux-actions';
import {ReduxUtils} from './../../Common';
import saveCredentials from './saveCredentials';

export default ({username, password}) => (dispatch, getState) => {
	const state = getState();
	//if (state.Security.isLoggedIn){
	//	return;
	//}
	console.log('hit');
	return fetch('http://localhost:3000/api/authenticate', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			password
		})
	})
		.then(response => JSON.parse(response._bodyText))
		.then(data => dispatch(saveCredentials({username, password, ...data})));
};