import {createAction} from 'redux-actions';
import addVote from './addVote';
import removeVote from './removeVote';

const isAddingVote = votes => votes > 0;
const haveVotesLeft = votes => votes > 0;
const isRemovingVote = votes => votes < 0;
const haveNotMetVoteLimit = votes => votes < 5;
const ideaHasVotes = idea => idea.votes > 0;
const canCastVote = (numberOfVotesToCast, votesLeft) => (numberOfVotesToCast !== 0) && ((isAddingVote(numberOfVotesToCast) && haveVotesLeft(votesLeft)) || (isRemovingVote(numberOfVotesToCast) && haveNotMetVoteLimit(votesLeft)));

export const action = (id, numberOfVotes) => (dispatch, getState) => {
  const state = getState();
  const votesLeft = state.getIn(['Retrospective', 'votesLeft']);
  console.log(numberOfVotes, votesLeft)
  if (!canCastVote(numberOfVotes, votesLeft)) {
    return;
  }
  const idea = state.getIn(['Retrospective', 'ideas']).find(idea => idea.id === id);
  if (isAddingVote(numberOfVotes)) {
    dispatch(addVote(id));
  } else if (ideaHasVotes(idea)) {
    dispatch(removeVote(id));
  }
};
export default action;
