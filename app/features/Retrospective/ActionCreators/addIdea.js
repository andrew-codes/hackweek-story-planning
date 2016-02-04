import {createAction} from 'redux-actions';
import {addIdea as key} from './../actions';
import {ReduxUtils} from './../../Common';
const createProxyAction = ReduxUtils.createProxyActionCreator(createAction);

export const action = idea => idea;
export default createProxyAction(key, action);
