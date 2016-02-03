import {handleActions} from 'redux-actions'
import initializeState from './../initializeState';
import loadUser from './loadUser';
import authenticationStart from './authenticationStart';
import authenticationComplete from './authenticationComplete';
import logout from './logout';

export default handleActions({
  ...logout,
  ...authenticationStart,
  ...authenticationComplete,
  ...loadUser
}, initializeState());

//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}
