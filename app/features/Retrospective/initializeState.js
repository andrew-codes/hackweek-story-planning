import Immutable from 'immutable';
import * as actions from './actions';

export default () => {
	return Immutable.fromJS({
      isInProgress: false
	});
};
