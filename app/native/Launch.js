import React, { Component, StyleSheet, View, Text } from 'react-native';
import * as Styles from './styles';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {ActionCreators as SecurityActionCreators} from './../features/Security';

class Launch extends Component {
	componentDidMount(){
		this.props.login({});
	}
	componentWillReceiveProps(nextProps) {
		const {
			isAuthenticationInProgress,
			isLoggedIn,
			homeScreen,
			loginScreen,
			} = nextProps;
		if (isAuthenticationInProgress) {
			return;
		}
		if (!isLoggedIn) {
			loginScreen();
		} else {
			homeScreen();
		}
	}

	render() {
		return (
			<View></View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		...Styles.Common.container(),
		backgroundColor: '#F5FCFF'
	}
});

const mapStateToProps = state => ({
	isLoggedIn: state.getIn(['Security', 'isLoggedIn']),
	isAuthenticationInProgress: state.getIn(['Security', 'isAuthenticationInProgress'])
});
const mapActionsToProps = dispatch => ({
	homeScreen: Actions.home,
	loginScreen: Actions.login,
	login: bindActionCreators(SecurityActionCreators.login, dispatch)
});
export default connect(mapStateToProps, mapActionsToProps)(Launch);