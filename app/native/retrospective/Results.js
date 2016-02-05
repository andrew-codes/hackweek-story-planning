import React, { Component, StyleSheet, Text, TextInput, View } from 'react-native';
import IdeaResultsBoard from './IdeaResultsBoard';

export default class Results extends Component {
  render() {
    const {
      votesLeft
      } = this.props;
    return (
      <View style={styles.container}>
        <IdeaResultsBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
