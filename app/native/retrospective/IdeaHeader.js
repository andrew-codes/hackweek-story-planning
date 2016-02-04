import React, { Component, StyleSheet, View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import {Common} from './../styles';

const getIdeaTypeImage = type => {
  switch (type) {
    case 0:
      return require('./assets/thumbs-up.png');
    case 1:
      return require('./assets/thumbs-down.png');
    case 2:
      return require('./assets/idea.png');
    case 3:
      return require('./assets/trophy.png');
  }
};

export default class extends Component {
  render() {
    const {
      text,
      id
      } = this.props;
    const ideaTypeImage = getIdeaTypeImage(id);
    return (
      <View style={styles.container}>
        <Image source={ideaTypeImage} style={styles.image} /><Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: Common.Palette.darkGray,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    paddingLeft: 13
  },
  image: {
    height: 28,
    width: 28
  }
});
