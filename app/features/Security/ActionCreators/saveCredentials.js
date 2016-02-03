import {saveCredentials as key} from './../actions';
import {createAction} from 'redux-actions';
import {Storage} from './../../Common';

export const action = ({username, password}) => {
	return Storage.saveAll({username, password});
};

export default createAction(key, action);
