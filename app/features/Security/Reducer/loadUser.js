import { loadUser as key} from './../actions';

export default {
	[key]: (state, action) => {
		return state.merge({user: action.payload });
	}
};
