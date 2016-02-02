import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as StoryPlanningActionCreators} from './../../features/StoryPlanning';
import Home from './../Home';

const mapStateToProps = state => ({
    count: state.getIn(['StoryPlanning', 'counter'])
});
const mapActionsToProps = dispatch => ({
    actions: bindActionCreators(StoryPlanningActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
