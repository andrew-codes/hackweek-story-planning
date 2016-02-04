import {createAction} from 'redux-actions';
import addVote from './addVote';

export const action = (id, numberOfVotes) => (dispatch, getState) => {
  const state = getState();
  const votesLeft = state.get('votesLeft');
  if (numberOfVotes === 0 || (numberOfVotes > 0 && votesLeft <= 0)) {
    return;
  }
  if (numberOfVotes > 0) {
    dispatch(addVote(id));
    return;
  }
  dispatch(removeVote(id));
};
export default action;
