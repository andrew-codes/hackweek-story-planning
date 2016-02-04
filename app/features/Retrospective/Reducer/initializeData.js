import { initializeData as key} from './../actions';

export default {
  [key]: (state, action) => state.merge({isInProgress: action.payload.isInProgress}).updateIn(['ideas'], list => list.concat(action.payload.ideas))
};
