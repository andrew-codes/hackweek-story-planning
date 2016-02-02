import React, { AppRegistry } from 'react-native';
import withProvider from './app/native/wrappers/withProvider';
import Router from './app/native/Router';
import createStore from './app/createStore';
import {ActionCreators as SecurityActionCreators} from './app/features/Security';
const store = createStore({
	Security: {
		isLoggedIn: false,
		isAuthenticationInProgress: false
	}
});
AppRegistry.registerComponent('StoryPlanning', () => withProvider(store)(Router));