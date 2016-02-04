import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';

let id = 0;
export const action = idea => ({...idea, id: id++});
export const actionType = actions.addIdea;
export default createAction(actions.addIdea, action);
