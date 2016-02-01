import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {Router, Route, Animations, Schema} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {NavBar, NavBarModal} from './Navbar';
import Login from './Login';
import Home from './containers/Home';

class AppRouter extends React.Component {
    render() {
        const {
            isLoggedIn
        } = this.props;
        return (
            <Router hideNavBar={true}>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Route name="login" component={Login} initial={!isLoggedIn} hideNavBar={true} wrapRouter={true} title="Login"/>
                <Route name="home" component={Home} initial={isLoggedIn} hideNavBar={false} wrapRouter={true} title="Story Planner"/>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.Security.isLoggedIn
});
export default connect(mapStateToProps)(AppRouter);
