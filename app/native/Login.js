import React, { PropTypes, Component, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as SecurityActionCreators} from './../features/Security';
import {Layout, Common, Button as ButtonStyles, Fields} from './styles';

export class Login extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: null,
      password: null
    };
  }

  render() {
    const {
      actions: {login}
      } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.versionText}>Version</Text><Text style={styles.oneText}>One</Text>
        </View>
        <View style={styles.loginFormContainer}>
          <TextInput placeholder="username" style={styles.textInput} autoCapitalize='none' autoCorrect={false}
                     onChangeText={(text) => this.setState({username: text})}
                     value={this.state.username} />
          <TextInput placeholder="password" style={styles.textInput} autoCapitalize='none' autoCorrect={false}
                     secureTextEntry={true}
                     onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
          <View style={styles.buttonContainer}>
            <Button style={styles.primaryButton}
                    onPress={login.bind(this, {username: this.state.username, password: this.state.password})}>Login</Button>
          </View>
        </View>
      </View>
    )
      ;
  }
}

const styles = StyleSheet.create({
  container: {
    ...Layout.verticalContainer(),
    backgroundColor: 'transparent'
  },
  welcomeContainer: {
    ...Layout.align('center', 'center'),
    backgroundColor: Common.Palette.voneRed,
    flex: 1,
    flexDirection: 'row'
  },
  versionText: {
    fontSize: 25,
    color: Common.Palette.voneLighterGray,
  },
  oneText: {
    fontSize: 25,
    color: Common.Palette.voneLightGray,
  },
  loginFormContainer: {
    ...Layout.align('center', 'flex-start'),
    flex: 2
  },
  textInput: {
    ...Fields.textField(),
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    ...Layout.verticalContainer(),
    ...Layout.align('stretch', 'flex-start')
  },
  primaryButton: {
    ...ButtonStyles.primary()
  }
});

const mapStateToProps = state => ({});
const mapActionsToProps = dispatch => ({
  homeScreen: Actions.home,
  actions: {
    login: bindActionCreators(SecurityActionCreators.login, dispatch)
  }
});
export default connect(mapStateToProps, mapActionsToProps)(Login);
