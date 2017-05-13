import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';

import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({login: actions.login, logout: actions.logout}, dispatch)});

class LoginComponent extends Component {
  onLoginPress = () => {
    this.props.actions.login({
      username: 'test',
      password: 'test'
    });
  };

  onLogoutPress = () => {
    this.props.actions.logout();
  };

  render() {
    const { loggedIn, name } = this.props.user;

    return (
      <View style={styles.container}>
        {
          loggedIn ?
            <View>
              <Text>Welcome, {name}!</Text>
              <Button
                onPress={this.onLogoutPress}
                title="Log out"
              />
            </View>
            :
            <Button
              onPress={this.onLoginPress}
              title="Log in"
            />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);