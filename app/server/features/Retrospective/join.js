import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';

export const action = () => ({isJoined: true});
export const actionType = actions.join;
export default createAction(actions.join, action);
