import React, { PropTypes, Component, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as SecurityActionCreators} from './../features/Security';
import * as Styles from './styles';

export class Login extends Component {
	static propTypes = {
		actions: PropTypes.shape({
			login: PropTypes.func.isRequired
		}).isRequired
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			username: null,
			password: null
		};
	}

	render() {
		const {
			actions: {login}
			} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.welcomeWrapper}>
					<Text style={styles.welcome}>VersionOne</Text>
				</View>
				<View style={styles.loginFormWrapper}>
					<TextInput placeholder="username" style={styles.textInput} autoCapitalize='none' autoCorrect={false}
							   onChangeText={(text) => this.setState({username: text})}
							   value={this.state.username} />
					<TextInput placeholder="password" style={styles.textInput} autoCapitalize='none' autoCorrect={false}
							   secureTextEntry={true}
							   onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
					<View style={styles.buttonContainer}>
						<Button style={styles.primaryButton}
								onPress={login.bind(this, {username: this.state.username, password: this.state.password})}>Login</Button>
					</View>
				</View>
			</View>
		)
			;
	}
}

const styles = StyleSheet.create({
	container: {
		...Styles.Common.verticalContainer(),
		backgroundColor: 'transparent'
	},
	welcomeWrapper: {
		...Styles.Common.align('center', 'center'),
		backgroundColor: Styles.Common.Palette.logoPrimary,
		flex: 1
	},
	welcome: {
		fontSize: 25,
		color: Styles.Common.Palette.logoSecondary,
	},
	loginFormWrapper: {
		...Styles.Common.align('center', 'flex-start'),
		flex: 2
	},
	textInput: {
		...Styles.Common.textField(),
		borderColor: 'gray',
		borderWidth: 1
	},
	buttonContainer: {
		...Styles.Common.verticalContainer(),
		...Styles.Common.align('stretch', 'flex-start')
	},
	primaryButton: {
		...Styles.Common.primaryButton()
	}
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
	homeScreen: Actions.home,
	actions: {
		login: bindActionCreators(SecurityActionCreators.login, dispatch)
	}
});
export default connect(mapStateToProps, mapActionsToProps)(Login);
