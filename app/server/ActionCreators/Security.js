import * as Actions from './../../features/Security/actions';
import {createAction} from 'redux-actions';

export const authenticate = createAction(Actions.authenticate, ({username, password}) => {
	return {
		username,
		isLoggedIn: true
	}
});
