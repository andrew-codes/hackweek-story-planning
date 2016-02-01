import React, {
    AppRegistry
}
from 'react-native';
import ProviderRoot from './app/native/ProviderRoot';
import Router from './app/native/Router';
import {
    combineReducers
}
from 'redux';
import {
    ReduxUtils
}
from './app/features/Common';
import {
    Reducer as StoryPlanning,
    feature as StoryPlanningFeature
}
from './app/features/StoryPlanning';
import {
    Reducer as Security
}
from './app/features/Security';

const reducers = {
    StoryPlanning,
    Security
};
const reducer = combineReducers(reducers);

const store = ReduxUtils.createStore('http://localhost:3000/VersionOne')(reducer, {
    StoryPlanning: {
        count: 0
    },
    Security: {
        isLoggedIn: false
    }
});

AppRegistry.registerComponent('StoryPlanning', () => ProviderRoot(store)(Router));
