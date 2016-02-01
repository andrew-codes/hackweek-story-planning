import login from './login';
import saveCredentials from './saveCredentials';
import {
    handleActions
}
from 'redux-actions'

export default handleActions({
    ...login,
    ...saveCredentials
}, {});
