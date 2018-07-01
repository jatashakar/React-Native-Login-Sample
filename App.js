/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  
} from 'react-native';

import Login from './src/pages/Login'
//type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />

      </View >
    );
  }
  ///Custom defined function

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }

});
