import * as actions from './../actions';
import authenticateToServer from './authenticateToServer';

export default ({username, password}) => dispatch => {
    dispatch(authenticateToServer({username, password}));
}
