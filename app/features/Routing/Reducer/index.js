import initializeState from './../initializeState';
import saveCredentials from './saveCredentials';
import signout from './signout';
import {
    handleActions
}
from 'redux-actions'

export default handleActions({
    ...saveCredentials,
	...signout
}, initializeState());


//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}