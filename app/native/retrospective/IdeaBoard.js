import React, { Component, StyleSheet, Text, ListView } from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import IdeaHeader from './IdeaHeader';

export class IdeaBoard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        getSectionData: (dataBlob, sectionId) => dataBlob[sectionId],
        getRowData: (dataBlob, sectionId, rowId) => dataBlob[`${sectionId}:${rowId}`]
      })
    };
  }

  render() {
    const {
      ideas,
      sectionIds,
      rowIds,
      IdeaComponent
      } = this.props;
    console.log(ideas);
    const dataSource = this.state.ds.cloneWithRowsAndSections(ideas, sectionIds, rowIds);
    return (
      <ListView style={styles.container} dataSource={dataSource}
                renderSectionHeader={(sectionData, sectionId) => <IdeaHeader {...sectionData} /> }
                renderRow={rowData => <IdeaComponent {...rowData}/> } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1
  }
});

const mapStateToProps = state => {
  const ideas = state.getIn(['Retrospective', 'ideas']).toArray();
  console.log(ideas, state.getIn(['Retrospective', 'ideas']));
  const props = {
    ideas: ideas.reduce((output, idea)=> {
      if (!output[idea.type.id]) {
        output[idea.type.id] = idea.type;
      }
      output[`${idea.type.id}:${idea.id}`] = idea;
      return output;
    }, {}),
    sectionIds: _.uniqBy(ideas, (idea => idea.type.id)).map(idea => idea.type.id).sort()
  };
  props.rowIds = props.sectionIds.map(sectionId => ideas.filter(idea => idea.type.id === sectionId).map(idea => idea.id));
  return props;
};
export default connect(mapStateToProps)(IdeaBoard);
