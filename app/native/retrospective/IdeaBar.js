import React, { Component, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';

export default class extends Component {
  render() {
    const {
      good,
      bad,
      idea,
      kudos,
      height
      } = this.props;
    return (
      <View style={{height: height}}>
        <View style={styles.actionsContainer}>
          <Button style={styles.action} onPress={good}>Good</Button>
          <Button style={styles.action} onPress={bad}>Bad</Button>
          <Button style={styles.action} onPress={idea}>Idea</Button>
          <Button style={styles.action} onPress={kudos}>Kudos</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    padding: 7
  },
  action: {
    flex: 1
  }
});
