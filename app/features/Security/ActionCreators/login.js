import saveCredentials from './saveCredentials';
import authenticationStart from './authenticationStart';
import authenticationComplete from './authenticationComplete';
import {Storage} from './../../../features/Common';

const login = ({username, password}) => dispatch => {
	dispatch(authenticationStart());
	if (!username && !password) {
		return Storage.getAll('username', 'password')
			.then(data => {
				if (data.username && data.password) {
					dispatch(authenticate(data));
					return;
				}
				dispatch(authenticationComplete());
			});
	}
	if (username && password) {
		dispatch(authenticate(({username, password})));
		return;
	}
};

const authenticate = ({username, password}) => dispatch => {
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
		.then(() => dispatch(saveCredentials({username, password})))
		.then(() => dispatch(authenticationComplete()));
};

export default login;