import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as StoryPlanningActionCreators} from './../features/StoryPlanning';
import * as Styles from './styles';

export class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.gameActionsContainer}>
					<Button style={styles.startGameButton}>Start a Game</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...Styles.Common.verticalContainer(),
		flexDirection: 'column',
		backgroundColor: Styles.Common.Palette.lightGray
	},
	gameActionsContainer: {
		flex: 2,
		...Styles.Common.align('center', 'center'),
	},
	startGameButton: {
		flex:2
	}
});

const mapStateToProps = state => ({
	count: state.getIn(['StoryPlanning', 'counter'])
});
const mapActionsToProps = dispatch => ({
	actions: bindActionCreators(StoryPlanningActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
