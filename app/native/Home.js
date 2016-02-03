import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {Layout, Button as ButtonStyles, Common} from './styles';
import { ActionCreators as RetrospectiveActions } from './../features/Retrospective';

export class Home extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isRetrospectiveInProgress || nextProps.isJoinedToRetrospective) {
      this.props.navigate.retrospectiveHome();
    }
  }

  render() {
    const {
      isRetrospectiveInProgress,
      actions
      } = this.props;
    const retrospectiveAction = isRetrospectiveInProgress ?
      <Button style={styles.action} onPress={joinRetrospective.bind(this)}>Join Retrospective</Button>
      : <Button style={styles.action} onPress={startRetrospective.bind(this)}>Start a Retrospective</Button>;
    return (
      <View style={styles.container}>
        <View style={styles.actionsContainer}>
          {retrospectiveAction}
          <Text>More to come...</Text>
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

function startRetrospective() {
  this.props.actions.startRetrospective();
  this.props.navigate.retrospectiveHome();
};
function joinRetrospective() {
  this.props.actions.joinRetrospective();
  this.props.navigate.retrospectiveHome();
};

const mapStateToProps = state => ({
  isRetrospectiveInProgress: state.getIn(['Retrospective', 'isInProgress']),
  isJoinedToRetrospective: state.getIn(['Retrospective', 'isJoined'])
});
const mapActionsToProps = dispatch => ({
  actions: {
    startRetrospective: bindActionCreators(RetrospectiveActions.start, dispatch),
    joinRetrospective: bindActionCreators(RetrospectiveActions.join, dispatch)
  },
  navigate: {
    retrospectiveHome: Actions.retrospectiveHome
  }
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
