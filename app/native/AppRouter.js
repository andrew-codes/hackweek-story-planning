import React, {Component, Navigator} from 'react-native';
import {Router, Route, Animations, Schema, Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-native-button';
import withToolbar from './wrappers/withToolbar';
import Login from './Login';
import Home from './Home';
import Launch from './Launch';
import RetrospectiveHome from './retrospective/Home';
import {ActionCreators as RetrospectiveActionCreators} from './../features/Retrospective';

export class AppRouter extends React.Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom} />
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
        <Schema name="withoutAnimation" />
        <Route name="launch" component={Launch} initial={true} hideNavBar={true} wrapRouter={true}
               schema="withoutAnimation"
               title="Launching Story Planner" />
        <Route name="login" component={Login} hideNavBar={true} wrapRouter={true} title="Login"
               schema="withoutAnimation" />
        <Route name="home" component={withToolbar('', '')(Home)} hideNavBar={true} wrapRouter={true}
               title="Story Planner" schema="withoutAnimation" />

        <Route name="retrospectiveHome" component={RetrospectiveHome} hideNavBar={true} wrapRouter={true}
               title="Retrospective" schema="withoutAnimation" />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.getIn(['Security', 'isLoggedIn'])
});
const mapActionsToProps = dispatch => ({
  actions: {
    finishRetrospective: bindActionCreators(RetrospectiveActionCreators.finish, dispatch)
  },
  navigate: {
    home: Actions.home
  }
});
export default connect(mapStateToProps, mapActionsToProps)(AppRouter);
