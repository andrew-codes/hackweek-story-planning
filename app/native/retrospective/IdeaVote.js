import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import {Layout, Button as ButtonStyles, Common} from './../styles';

export default class extends Component {
  render() {
    const {
      text
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Button style={styles.vote}>+1</Button>
        <Button style={styles.vote}>-1</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    flex: 3
  },
  vote: {
    padding: 7,
    fontSize: 24,
    borderRadius: 24,
    height: 48,
    width: 48,
    color: '#fff',
    backgroundColor: Common.Palette.voneRed,
    marginLeft: 13
  }
});
