import * as actions from './../actions';
import {createAction} from 'redux-actions';

export const action = ({username, password}) => {
    return {
        username,
        isLoggedIn: true
    }
};


export default createAction(actions.login, action);
