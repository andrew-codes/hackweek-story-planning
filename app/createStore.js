import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { ReduxUtils } from './features/Common';

import { Reducer as StoryPlanning, initializeState as StoryPlannerInitializeState } from './features/StoryPlanning';
import { Reducer as Security, initializeState as SecurityInitializeState } from './features/Security';

export default (initialState) => {
	const reducers = {
		StoryPlanning,
		Security
	};
	const reducer = combineReducers(reducers);
	return ReduxUtils.createStore('http://localhost:3000/VersionOne')(reducer, Immutable.fromJS(initialState));
}