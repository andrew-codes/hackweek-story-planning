import {createAction} from 'redux-actions';
import {removeVote as key} from './../actions';
import {ReduxUtils} from './../../Common';
const createProxyAction = ReduxUtils.createProxyActionCreator(createAction);

export const action = idea => idea.id;
export default createProxyAction(key, action);
