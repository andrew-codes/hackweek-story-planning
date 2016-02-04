import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {saveVote} from './fakeStorage';

export const action = id => (saveVote(id, -1));
export const actionType = actions.removeVote;
export default createAction(actions.removeVote, action);
