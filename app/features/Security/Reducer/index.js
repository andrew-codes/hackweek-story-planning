import authenticate from './authenticate';
import saveCredentials from './saveCredentials';
import {
    handleActions
}
from 'redux-actions'

//export default handleActions({
//    ...authenticate,
//    ...saveCredentials
//}, {});
export default (state = {}, action) => {
	console.log(action);
	return state;
}