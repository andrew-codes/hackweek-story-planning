import initializeState from './../initializeState';
import saveCredentials from './saveCredentials';
import authenticationStart from './authenticationStart';
import authenticationComplete from './authenticationComplete';
import logout from './logout';
import {handleActions} from 'redux-actions'

export default handleActions({
	...saveCredentials,
	...logout,
	...authenticationStart,
	...authenticationComplete
}, initializeState());

//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}