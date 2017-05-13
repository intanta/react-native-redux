import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import LoginComponent from './src/components/LoginComponent';
import storeFactory from './src/store/configureStore';

let store = storeFactory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginComponent/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FirstProject', () => App);
