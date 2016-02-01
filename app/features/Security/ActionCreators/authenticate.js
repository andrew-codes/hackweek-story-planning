import {authenticate as key} from './../actions';
import {createAction} from 'redux-actions';
import {ReduxUtils} from './../../Common';
const createProxyAction = ReduxUtils.createProxyActionCreator(createAction);

export const action = ({username, password}) => ({username, password});

export default createProxyAction(key, action);
