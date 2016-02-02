import initializeState from './../initializeState';
import saveCredentials from './saveCredentials';
import {
    handleActions
}
from 'redux-actions'

export default handleActions({
    ...saveCredentials
}, initializeState());


//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}