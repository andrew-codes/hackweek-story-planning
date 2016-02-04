import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import {Common} from './../styles';

export default class extends Component {
  render() {
    const {
      text
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: Common.Palette.darkGray
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});
