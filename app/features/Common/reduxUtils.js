import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
window.navigator.userAgent = 'react-native';
import createSocketIoMiddleware from 'redux-socket.io';
var io = require('socket.io-client/socket.io');

export const createProxyActionCreator = createAction => (actionType, payload) => createAction(`server/${actionType}`, payload);

export const createStore = (socketIOUrl) => {
    const socket = io(socketIOUrl);
    const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
    return applyMiddleware(socketIoMiddleware)(reduxCreateStore);
};
