import {Map} from 'immutable';
import { saveCredentials as key} from './../actions';

export default {
	[key]: (state, action) => {
		const {
			payload
			} = action;
		return state.merge(payload);
	}
};
