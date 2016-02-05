import React, { AppRegistry } from 'react-native';
import withProvider from './app/native/wrappers/withProvider';
import AppRouter from './app/native/AppRouter';
import createStore from './app/createStore';
const store = createStore({
  Security: {
    isLoggedIn: false,
    isAuthenticationInProgress: false
  }
});
AppRegistry.registerComponent('SideKICK', () => withProvider(store)(AppRouter));
