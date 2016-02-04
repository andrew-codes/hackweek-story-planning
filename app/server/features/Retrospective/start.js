import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {saveIsJoined} from './fakeStorage';

export const action = () => (saveIsJoined(true, true));
export const actionType = actions.start;
export default createAction(actions.start, action);
