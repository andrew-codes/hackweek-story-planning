import {
    increment
}
from './../actions';

export default {
    [increment]: (state = {count: 0}, action) => {
        return {
            ...state,
            count: ++action.payload
        };
    }
};
