import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

export default class extends Component {
  render() {
    const {
      text,
      votes
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.votes}>{votes}</Text>
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
