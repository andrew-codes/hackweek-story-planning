import {
    createStore as reduxCreateStore, applyMiddleware, combineReducers
}
from 'redux';
import thunk from 'redux-thunk';
window.navigator.userAgent = 'react-native';
import createSocketIoMiddleware from 'redux-socket.io';
var io = require('socket.io-client/socket.io');

export const createProxyActionCreator = createAction => (actionType, payload) => createAction(`server/${actionType}`, payload);

export const createStore = url => {
    const socketIoMiddleware = createSocketIoMiddleware(io(url), 'server/');
    return applyMiddleware(thunk, socketIoMiddleware)(reduxCreateStore);
};
