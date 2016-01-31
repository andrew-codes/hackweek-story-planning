import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
// import thunk from 'redux-thunk';
window.navigator.userAgent = 'react-native';
import createSocketIoMiddleware from 'redux-socket.io';
var io = require('socket.io-client/socket.io');
import {Reducer as StoryPlanning, ActionCreators} from './app/features/StoryPlanning';

const socket = io('http://localhost:3000/StoryPlanning');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const createStoreWithMiddleware = applyMiddleware(socketIoMiddleware)(createStore);

const reducers = {
    StoryPlanning
};
const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer, {StoryPlanning: {
    count: 0
}
});
const countMe = (count) => store.dispatch(ActionCreators.increment(count));
class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Button onPress={countMe.bind(this, this.props.count)}>Count me In!</Button>
            <Text>Count: {this.props.count}</Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
    );
  }
}

const ConnectedApp = connect(state=>({
    count: state.StoryPlanning.count
}))(App);

class Root extends Component{
    render(){
        return (<Provider store={store}>
            <ConnectedApp />
            </Provider>);
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

AppRegistry.registerComponent('StoryPlanning', () => Root);
