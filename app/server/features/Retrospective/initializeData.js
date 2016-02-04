import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {getState} from './fakeStorage';

export const action = () => (getState());
export default createAction(actions.initializeData, action);
