import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';

export const action = () => ({isJoined: false, isInProgress: false});
export const actionType = actions.finish;
export default createAction(actions.finish, action);
