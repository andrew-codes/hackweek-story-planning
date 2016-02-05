import {createAction} from 'redux-actions';
import addVote from './addVote';
import removeVote from './removeVote';

const isAddingVote = votes => votes > 0;
const haveVotesLeft = votes => votes < 5;
const isRemovingVote = votes => votes < 0;
const haveVotes = votes => votes > 0;
const sumVotes = idea => Object.keys(idea.votes).reduce((sum, key) => sum + idea.votes[key], 0);
const ideaHasVotes = idea => sumVotes(idea) > 0;
const canCastVote = (numberOfVotesToCast, totalVotes) => (numberOfVotesToCast !== 0) && ((isAddingVote(numberOfVotesToCast) && haveVotesLeft(totalVotes)) || (isRemovingVote(numberOfVotesToCast) && haveVotes(totalVotes)));

export const action = (username, id, numberOfVotes) => (dispatch, getState) => {
  const state = getState();
  const ideas = state.getIn(['Retrospective', 'ideas']);
  const totalVotes = ideas.reduce((voteSum, idea) => voteSum + idea.votes[username] || 0, 0);
  console.log(numberOfVotes, totalVotes);
  if (!canCastVote(numberOfVotes, totalVotes)) {
    return;
  }
  const idea = ideas.find(idea => idea.id === id);
  if (isAddingVote(numberOfVotes)) {
    dispatch(addVote(username, id));
  } else if (ideaHasVotes(idea)) {
    dispatch(removeVote(username, id));
  }
};
export default action;
