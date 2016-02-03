import {  createStore as reduxCreateStore, applyMiddleware, compose }  from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {isApp} from './env';

export const createProxyActionCreator = createAction => (actionType, payload) => createAction(`server/${actionType}`, payload);

export const createStore = url => {
  const middlewares = [thunk, promise];
  if (isApp) {
    window.navigator.userAgent = 'react-native';
    const createSocketIoMiddleware = require('redux-socket.io');
    const io = require('socket.io-client/socket.io');
    const socketIoMiddleware = createSocketIoMiddleware(io(url), 'server/');
    middlewares.push(socketIoMiddleware);
  }
  return compose(applyMiddleware(...middlewares), devTools())(reduxCreateStore);
};
