import React, { Component, StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layout, Button as ButtonStyles, Common} from './../styles';
import Share from './Share';
import Vote from './Vote';
import Results from './Results';

export class Home extends Component {
  render() {
    return (
      <ScrollableTabView style={styles.tabsContainer} tabBarUnderlineColor={Common.Palette.voneRed}
                         tabBarActiveTextColor={Common.Palette.voneRed}>
        <Share tabLabel="Share" style={styles.container} />
        <Vote tabLabel="Vote" style={styles.container} />
        <Results tabLabel="Results" style={styles.container} />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    marginTop: 30
  },
  container: {
    flex: 1
  }
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({});

export default connect(mapStateToProps, mapActionsToProps)(Home);
