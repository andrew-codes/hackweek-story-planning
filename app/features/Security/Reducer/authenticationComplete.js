import {Map} from 'immutable';
import { authenticationComplete as key} from './../actions';

export default {
	[key]: (state, action) => {
		return state.merge({isAuthenticationInProgress: false});
	}
};
