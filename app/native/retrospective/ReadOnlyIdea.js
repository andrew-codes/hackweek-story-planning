import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

export default class extends Component {
  render() {
    const {
      text
      } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7
  }
});
