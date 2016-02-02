import React, { AppRegistry } from 'react-native';
import ProviderRoot from './app/native/ProviderRoot';
import Router from './app/native/Router';
import createStore from './app/createStore';
import initializeNativeApp from './app/initialNativeApp';
const store = createStore();
initializeNativeApp(store);

AppRegistry.registerComponent('StoryPlanning', () => ProviderRoot(store)(Router));