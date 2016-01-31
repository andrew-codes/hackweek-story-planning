import * as actions from './../../actions';
import incrementCreator from './increment';
import {createAction} from 'redux-actions';

export const increment = createAction(actions.increment, incrementCreator);
