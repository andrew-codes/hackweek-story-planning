import { signout as key} from './../actions';

export default {
	[key]: (state, action) => {
		return state.delete('username')
			.delete('password')
			.merge({isLoggedIn: false});
	}
};
