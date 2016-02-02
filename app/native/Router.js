import React, {
	Component,
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';
import {Router, Route, Animations, Schema, Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import withToolbar from './wrappers/withToolbar';
import Login from './Login';
import Home from './containers/Home';
import Launch from './Launch';

class AppRouter extends React.Component {
	render() {
		return (
			<Router hideNavBar={true}>
				<Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom} />
				<Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
				<Schema name="withoutAnimation" />
				<Route name="login" component={Login} hideNavBar={true} wrapRouter={true} title="Login"
					   schema="withoutAnimation" />
				<Route name="home" component={withToolbar(Home)} hideNavBar={true} wrapRouter={true}
					   title="Story Planner" schema="withoutAnimation" />
				<Route name="launch" component={Launch} initial={true} hideNavBar={true} wrapRouter={true} schema="withoutAnimation"
					   title="Launching Story Planner" />
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.getIn(['Security', 'isLoggedIn'])
});
export default connect(mapStateToProps)(AppRouter);
