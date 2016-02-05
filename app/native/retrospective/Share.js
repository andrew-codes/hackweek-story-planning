import React, { Component, StyleSheet, Text, TextInput, View } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IdeaBar from './IdeaBar';
import IdeaBoard from './IdeaBoard';
import ReadOnlyIdea from './ReadOnlyIdea';
import {ActionCreators as RetrospectiveActionCreators} from './../../features/Retrospective';
import {Fields} from './../styles';

const addIdea = (type, text) => function() {
  if (!text) {
    return;
  }
  this.props.actions.addIdea({type, text});
};
export class Share extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ideaInput: ''
    };
  }

  render() {
    const {
      ideas
      } = this.props;
    return (
      <View style={styles.container}>
        <TextInput style={styles.ideaInput} value={this.state.ideaInput}
                   onChangeText={text => this.setState({ideaInput: text})} placeholder="ideas" />
        <IdeaBar style={styles.ideaBar} good={addIdea({id: 0, text: 'Good'}, this.state.ideaInput).bind(this)}
                 bad={addIdea({id: 1, text: 'Bad'}, this.state.ideaInput).bind(this)}
                 idea={addIdea({id: 2, text: 'Idea'}, this.state.ideaInput).bind(this)}
                 kudos={addIdea({id: 3, text: 'Kudos'}, this.state.ideaInput).bind(this)}
        />
        <IdeaBoard IdeaComponent={ReadOnlyIdea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ideaBar: {
    height: 40
  },
  ideaInput: {
    ...Fields.textField(),
    marginTop: 20
  }
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
  actions: {
    addIdea: bindActionCreators(RetrospectiveActionCreators.addIdea, dispatch)
  }
});

export default connect(mapStateToProps, mapActionsToProps)(Share);
