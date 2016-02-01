import {
	authenticate as key
}
from './../actions';

export default {
    [key]: (state, action) => {
        const {
            payload: {
                isLoggedIn,
				username
            }
        } = action;
        return {
            ...state,
			username,
            isLoggedIn
        };
    }
};
