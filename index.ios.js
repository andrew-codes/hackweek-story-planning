import React, {
  AppRegistry
} from 'react-native';
import ProviderRoot from './app/components/ProviderRoot';
import IOS from './app/components/containers/IOS';
import {
    combineReducers
}
from 'redux';
import {
    ReduxUtils
}
from './app/features/Common';
import {
    Reducer as StoryPlanning, ActionCreators
}
from './app/features/StoryPlanning';

const reducers = {
    StoryPlanning
};
const reducer = combineReducers(reducers);

const store = ReduxUtils.createStore('http://localhost:3000/StoryPlanning')(reducer, {
    StoryPlanning: {
        count: 0
    }
});

AppRegistry.registerComponent('StoryPlanning', () => ProviderRoot(store)(IOS));
