import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';

export const action = () => ({isInProgress: true});
export const actionType = actions.start;
export default createAction(actions.start, action);
