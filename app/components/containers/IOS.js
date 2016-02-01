import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as StoryPlanningActionCreators} from './../../features/StoryPlanning';
import Component from './../IOS';

const mapStateToProps = state => ({
    count: state.StoryPlanning.count
});
const mapActionsToProps = dispatch => ({
    actions: bindActionCreators(StoryPlanningActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Component);
