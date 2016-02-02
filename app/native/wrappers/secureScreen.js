import React, {Component} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

export default InnerComponent => {
	class SecureScreen extends Component {
		componentWillReceiveProps(nextProps) {
			if (!nextProps.isLoggedIn) {
				nextProps.actions.login();
			}
		}

		render() {
			return (
				<InnerComponent {...this.props} />
			);
		}
	}
	return connect(mapStateToProps, mapActionsToProps)(SecureScreen);
};

const mapStateToProps = state => ({
	isLoggedIn: state.getIn(['Security', 'isLoggedIn'])
});
const mapActionsToProps = dispatch => ({
	actions: Actions
});
