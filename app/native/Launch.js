import React, { PropTypes, Component, StyleSheet, View } from 'react-native';
import {Layout} from './styles';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {ActionCreators as SecurityActionCreators} from './../features/Security';

export class Launch extends Component {
  static propTypes = {
    isAuthenticationInProgress: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    navigate: PropTypes.shape({
      homeScreen: PropTypes.func.isRequired,
      loginScreen: PropTypes.func.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.actions.login({});
  }

  componentWillReceiveProps(nextProps) {
    const {
      isAuthenticationInProgress,
      isLoggedIn,
      navigate
      } = nextProps;
    if (isAuthenticationInProgress) {
      return;
    }
    if (!isLoggedIn) {
      navigate.loginScreen();
    } else {
      navigate.homeScreen();
    }
  }

  render() {
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Layout.verticalContainer(),
    backgroundColor: '#F5FCFF'
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.getIn(['Security', 'isLoggedIn']),
  isAuthenticationInProgress: state.getIn(['Security', 'isAuthenticationInProgress'])
});
const mapActionsToProps = dispatch => ({
  navigate: {
    homeScreen: Actions.home,
    loginScreen: Actions.login,
  },
  actions: {
    login: bindActionCreators(SecurityActionCreators.login, dispatch)
  }
});
export default connect(mapStateToProps, mapActionsToProps)(Launch);
