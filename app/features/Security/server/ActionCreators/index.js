import * as actions from './../actions';
import loginCreator from './login';
import {createAction} from 'redux-actions';

export const login = createAction(actions.login, loginCreator);
