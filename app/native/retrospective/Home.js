import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withToolbar from './../wrappers/withToolbar';
import {Layout, Button as ButtonStyles, Common} from './../styles';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actionsContainer}>
         <Text>Retro Time!</Text>
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
  actionsContainer: {
    flex: 1,
    ...Layout.align('center', 'center')
  },
  action: {
    flex: 1,
    ...ButtonStyles.primary()
  }
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
});


//const finish = bindActionCreators(RetroActionCreators.finish, dispatch)
//const finishRetrospective = () => {
//  finish();
//  Actions.home();
//};
//const finishButton = <Button onPress={finishRetrospective} style={{color: '#fff'}}>Finish</Button>;

export default withToolbar('','')(connect(mapStateToProps, mapActionsToProps)(Home));
