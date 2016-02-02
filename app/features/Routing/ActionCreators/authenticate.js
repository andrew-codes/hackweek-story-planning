import {authenticate as key} from './../actions';
import {createAction} from 'redux-actions';
import saveCredentials from './saveCredentials';

export default ({username, password}) => (dispatch, getState) => {
	if (!username || username === 'null' || !password || password === 'null') {
		return;
	}
	const state = getState();
	if (state.getIn(['Security', 'isLoggedIn'])) {
		return;
	}
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