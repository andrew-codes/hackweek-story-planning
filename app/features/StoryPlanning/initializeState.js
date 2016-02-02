import {Map} from 'immutable';
import * as actions from './actions';

export default () => {
	return Map({
		StoryPlanning: {
			counter: 0
		}
	});
};