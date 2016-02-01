import {
    login
}
from './../actions';

export default {
    [login]: (state, action) => {
        const {
            payload: {
                isLoggedIn
            }
        } = action;
        return {
            ...state,
            isLoggedIn
        };
    }
};
