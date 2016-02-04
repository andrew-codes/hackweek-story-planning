import {handleActions} from 'redux-actions'
import initializeState from './../initializeState';
import start from './start';
import join from './join';
import finish from './finish';
import addIdea from './addIdea';
import initializeData from './initializeData';
import addVote from './addVote';
import removeVote from './removeVote';

export default handleActions({
  ...start,
  ...join,
  ...addIdea,
  ...initializeData,
  ...addVote,
  ...removeVote
}, initializeState());

//for debugging
//export default (state, action) => {
//	console.log('here', state);
//	return state;
//}
