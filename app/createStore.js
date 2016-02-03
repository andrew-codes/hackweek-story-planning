import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { ReduxUtils } from './features/Common';

import { Reducer as Retrospective  } from './features/Retrospective';
import { Reducer as Security } from './features/Security';

export default (initialState) => {
	const reducers = {
    Retrospective,
		Security
	};
	const reducer = combineReducers(reducers);
	return ReduxUtils.createStore('http://localhost:3000/VersionOne')(reducer, Immutable.fromJS(initialState));
}
