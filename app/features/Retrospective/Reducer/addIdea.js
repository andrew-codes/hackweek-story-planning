import { addIdea as key} from './../actions';

export default {
  [key]: (state, action) => {
    return state.update('ideas', list => list.concat([action.payload]));
  }
};
