import increment from './increment';
import {
    handleActions
}
from 'redux-actions'

export default handleActions({
    ...increment
}, {
    count: 0
});
