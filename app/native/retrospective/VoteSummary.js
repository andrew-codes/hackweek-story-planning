import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

const sumVotes = votes => Object.keys(votes).reduce((sum, key) => sum + votes[key], 0);
export default class extends Component {
  render() {
    const {
      text,
      votes
      } = this.props;
    const sum = sumVotes(votes);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.votes}>{sum}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    fontSize: 24
  },
  votes: {
    justifyContent: 'flex-end',
    fontSize: 24
  }
});
