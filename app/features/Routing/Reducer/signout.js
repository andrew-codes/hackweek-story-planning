import {Map} from 'immutable';
import { signout as key} from './../actions';

export default {
	[key]: (state, action) => {
		return state.merge(action.payload);
	}
};
