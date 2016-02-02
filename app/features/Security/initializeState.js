import {Map} from 'immutable';
import * as actions from './actions';

export default () => {
	return Map({
		Security: {
			isLoggedIn: false,
			username: null,
			password: null
		}
	});
};