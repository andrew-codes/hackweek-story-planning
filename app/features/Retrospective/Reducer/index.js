import {handleActions} from 'redux-actions'
import initializeState from './../initializeState';
import start from './start';
import join from './join';
import finish from './finish';

export default handleActions({
  ...start,
  ...join,
  ...finish
}, initializeState());

//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}
