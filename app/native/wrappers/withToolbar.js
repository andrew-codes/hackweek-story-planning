import React, {Component, StyleSheet, View, Text} from 'react-native';
import {Actions}  from 'react-native-router-flux';
import {connect} from 'react-redux';
import {ActionCreators as SecurityActionCreators} from './../../features/Security';
import Button from 'react-native-button';
import * as Styles from './../styles';

class Toolbar extends React.Component {
	render() {
		return (
			<View style={styles.toolbar}>
				<Text style={styles.toolbarButton}>Add</Text>
				<Text style={styles.toolbarTitle}>This is the title</Text>
				<Button style={styles.toolbarButton} onPress={this.props.logout}>Logout</Button>
			</View>
		);
	}
}

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
	logout: () => {
		dispatch(SecurityActionCreators.logout());
		Actions.login();
	}
});
const ConnectedToolbar = connect(mapStateToProps, mapActionsToProps)(Toolbar);

export default WrappedComponent => class extends Component {
	render() {
		return (
			<View>
				<ConnectedToolbar />
				<WrappedComponent {...this.props} />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: '#81c04d',
		paddingTop: 30,
		paddingBottom: 10,
		flexDirection: 'row'
	},
	toolbarButton: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'normal'
	},
	toolbarTitle: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		flex: 1
	}
});