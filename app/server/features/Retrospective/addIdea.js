import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {saveIdea} from './fakeStorage';

export const action = idea => (saveIdea(idea));
export const actionType = actions.addIdea;
export default createAction(actions.addIdea, action);
