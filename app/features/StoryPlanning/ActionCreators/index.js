import * as actions from './../actions';
import incrementCreator from './increment';
import {createAction} from 'redux-actions';
import {ReduxUtils} from './../../Common';
const createProxyAction = ReduxUtils.createProxyActionCreator(createAction);

export const increment = createProxyAction(actions.increment, incrementCreator);
