import {
    saveCredentials
}
from './../actions';

export default {
    [saveCredentials]: (state, action) => {
        const {
            payload: {
                username,
                password
            }
        } = action;
        return {
            ...state,
            username,
            password
        };
    }
};
