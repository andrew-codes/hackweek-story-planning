import {Map} from 'immutable';
import { authenticationStart as key} from './../actions';

export default {
	[key]: (state, action) => {
		return state.merge({isAuthenticationInProgress: true});
	}
};
