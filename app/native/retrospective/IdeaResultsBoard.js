import React, { Component, StyleSheet, Text, ListView } from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import VoteSummary from './VoteSummary';

export class IdeaResultsBoard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
    };
  }

  render() {
    const {
      ideas
      } = this.props;
    const dataSource = this.state.ds.cloneWithRows(ideas);
    return (
      <ListView style={styles.container} dataSource={dataSource}
                renderRow={rowData => <VoteSummary {...rowData}/> } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1
  }
});

const mapStateToProps = state => ({
  ideas: state.getIn(['Retrospective', 'ideas']).sort((a,b) => b.votes - a.votes).toArray()
});
export default connect(mapStateToProps)(IdeaResultsBoard);
