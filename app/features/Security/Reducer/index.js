import saveCredentials from './saveCredentials';
import {
    handleActions
}
from 'redux-actions'

export default handleActions({
    ...saveCredentials
}, {});


//for debugging
//export default (state = {}, action) => {
//	console.log('here', action);
//	return state;
//}