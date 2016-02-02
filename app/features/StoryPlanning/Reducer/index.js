import initializeState from './../initializeState';

import increment from './increment';
import { handleActions} from 'redux-actions'

export default handleActions({
	...increment
}, initializeState());
