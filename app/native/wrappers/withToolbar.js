import React, {PropTypes, Component, StyleSheet, View, Text} from 'react-native';
import {Actions}  from 'react-native-router-flux';
import {connect} from 'react-redux';
import {ActionCreators as SecurityActionCreators} from './../../features/Security';
import Button from 'react-native-button';
import {Layout, Common} from './../styles';

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
    const leftComponent = left ? <View style={styles.toolbarButton}>{left}</View>
      :  <View style={styles.toolbarButton}/>;
    const titleComponent = title ? <View style={styles.toolbarButton}>{title}</View>
      : <View style={styles.toolbarTitle}/>;
		return (
			<View style={styles.toolbar}>
        {leftComponent}
        {titleComponent}
				<Button style={styles.logoutButton} onPress={this.props.logout}>Logout</Button>
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
		...Layout.verticalContainer()
	},
	toolbar: {
		flexDirection: 'row',
		...Layout.padEdge(),
		backgroundColor: Common.Palette.voneRed,
		paddingTop: 30,
		paddingBottom: 10
	},
  logoutButton: {
    alignItems: 'flex-end',
    flex: 1,
    color: '#fff'
  },
  toolbarButton: {
	},
	toolbarTitle: {
		flex: 1
	}
});
