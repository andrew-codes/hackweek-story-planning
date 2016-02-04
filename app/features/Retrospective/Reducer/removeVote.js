import { removeVote as key} from './../actions';

export default {
  [key]: (state, action) => state.updateIn(['ideas'], list => list.update(list.findIndex(item => item.id === action.payload.id), (item) => action.payload)).set('votesLeft', state.get('votesLeft') + 1)
};
