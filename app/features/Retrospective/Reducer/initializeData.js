import { initializeData as key} from './../actions';

export default {
  [key]: (state, action) => {
    console.log(action.payload);
    return state.merge({isInProgress: action.payload.isInProgress}).updateIn(['ideas'], list => list.concat(action.payload.ideas));
  }
};
