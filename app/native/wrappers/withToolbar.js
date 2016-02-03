import React, {PropTypes, Component, StyleSheet, View, Text} from 'react-native';
import {Actions}  from 'react-native-router-flux';
import {connect} from 'react-redux';
import {ActionCreators as SecurityActionCreators} from './../../features/Security';
import Button from 'react-native-button';
import * as Styles from './../styles';

class Toolbar extends React.Component {
	static propTypes = {
		title: PropTypes.node,
		left: PropTypes.node
	};

	static defaultProps = {
		title: '',
		left: ''
	};

	render() {
		const {
			title,
			left
			} = this.props;
		return (
			<View style={styles.toolbar}>
				<Text style={styles.toolbarButton}>{left}</Text>
				<Text style={styles.toolbarTitle}>{title}</Text>
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

export default (title, left) => WrappedComponent => class extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ConnectedToolbar title={title} left={left} />
				<WrappedComponent {...this.props} />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		...Styles.Common.verticalContainer()
	},
	toolbar: {
		flexDirection: 'row',
		...Styles.Common.padEdge(),
		backgroundColor: Styles.Common.Palette.logoPrimary,
		paddingTop: 30,
		paddingBottom: 10
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