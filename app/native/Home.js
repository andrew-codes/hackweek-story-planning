import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as StoryPlanningActionCreators} from './../features/StoryPlanning';
import {Layout, Button as ButtonStyles, Common} from './styles';

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
    ...Layout.verticalContainer(),
    flexDirection: 'column',
    backgroundColor: Common.Palette.lightGray
  },
  gameActionsContainer: {
    flex: 1,
    ...Layout.align('center', 'center')
  },
  startGameButton: {
    flex: 1,
    ...ButtonStyles.primary()
  }
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
  actions: bindActionCreators(StoryPlanningActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
