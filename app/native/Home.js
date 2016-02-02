import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import * as Styles from './styles';

const countMe = function() {
	this.props.actions.increment(this.props.count);
};
export default class extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Button onPress={countMe.bind(this)}>Count me In!</Button>
				<Text>Count: {this.props.count}</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...Styles.Common.container(),
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 25,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
