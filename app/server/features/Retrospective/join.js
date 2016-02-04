import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {saveIsJoined} from './fakeStorage';

export const action = () => (saveIsJoined(true, true));
export const actionType = actions.join;
export default createAction(actions.join, action);
