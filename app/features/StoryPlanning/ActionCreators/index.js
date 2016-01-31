import * as actions from './../actions';
import incrementCreator from './increment';
import {createAction} from 'redux-actions';
import {createServerActionCreator} from './../../Common';
const createServerAction = createServerActionCreator(createAction);

export const increment = createServerAction(actions.increment, incrementCreator);
