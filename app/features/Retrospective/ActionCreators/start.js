import {createAction} from 'redux-actions';
import {start as key} from './../actions';
import {ReduxUtils} from './../../Common';
const createProxyAction = ReduxUtils.createProxyActionCreator(createAction);

export const action = () => ({});
export default createProxyAction(key, action);
