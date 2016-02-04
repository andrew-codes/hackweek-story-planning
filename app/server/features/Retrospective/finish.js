import {Server as actions} from './../../../features/Retrospective/actions';
import {createAction} from 'redux-actions';
import {clearIdeas, saveIsJoined} from './fakeStorage';

export const action = () => {
  clearIdeas();
  return saveIsJoined(false, false);
};
export const actionType = actions.finish;
export default createAction(actions.finish, action);
