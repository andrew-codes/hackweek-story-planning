import * as actions from './../actions';
import authenticate from './authenticate';

export default ({username, password}) => dispatch => {
    dispatch(authenticate({username, password}));
}
