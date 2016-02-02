import {Storage} from './features/Common';
import {Feature as SecurityFeature, ActionCreators as SecurityActionCreators} from './features/Security';

export default store => {
	Storage.get(SecurityFeature.name)
		.then(data => {store.dispatch(SecurityActionCreators.authenticate(data))});
};
