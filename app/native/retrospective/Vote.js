import React, { Component, StyleSheet, Text, TextInput, View } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IdeaBoard from './IdeaBoard';
import IdeaVote from './IdeaVote';

export class Vote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ideaInput: ''
    };
  }

  render() {
    const {
      votesLeft
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.votesLeft}>You have {votesLeft} votes left.</Text>
        <IdeaBoard IdeaComponent={IdeaVote} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  votesLeft: {
    textAlign: 'center',
    padding: 13
  }
});

const mapStateToProps = state => ({votesLeft: state.getIn(['Retrospective', 'votesLeft'])});
export default connect(mapStateToProps)(Vote);
