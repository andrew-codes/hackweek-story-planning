import {
	saveCredentials as key
}
from './../actions';

export default {
    [key]: (state, action) => {
        const {
            payload: {
                isLoggedIn,
				username,
				password
            }
        } = action;
        return {
            ...state,
			username,
			password,
            isLoggedIn
        };
    }
};
