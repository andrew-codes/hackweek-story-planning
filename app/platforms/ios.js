import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import {Reducer as StoryPlanning, ActionCreators} from './features/StoryPlanning';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const createStoreWithMiddleware = applyMiddleware(thunk, socketIoMiddleware)(createStore);

const reducers = {
    StoryPLanning
};
const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer);

const countMe = () => store.dispatch(ActionCreators.increment());
class StoryPlanning extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <button onClick={countMe}>Count me In!</button>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
      </Provider>
    );
  }
}

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})();

AppRegistry.registerComponent('StoryPlanning', () => StoryPlanning);
