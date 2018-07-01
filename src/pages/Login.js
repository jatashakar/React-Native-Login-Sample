import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

//type Props = {};
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewlogoandtext}>
          <Image style={styles.logosize} source={require('../Images/rnlogo.png')}>
          </Image>
          <Text style={styles.logotext}>
            Welcome To React Native Login!
        </Text>
        </View>
        <View style={styles.logincontainer}>
          <TextInput style={styles.inputbox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email Id"
            placeholderTextColor='#fff'>
          </TextInput>
          <TextInput style={styles.inputbox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            placeholderTextColor='#fff'>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.loginbtnstyle} onPress={this.loginButtonFun}>
          <Text style={styles.loginbtntext}>
            Login
          </Text>
        </TouchableOpacity>
      </View >
    );
  }
  ///Custom defined function
  loginButtonFun() {
    alert("Login Button clicked!");

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
  logincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  logotext: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  inputbox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
  
    color: '#ffffff',
    marginVertical: 10
  },
  loginbtnstyle: {
    width: 300,
    borderRadius: 25,
    paddingVertical: 10,

    backgroundColor: '#1c913a',
   
   
  },
  viewlogoandtext: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  logosize: {
    width: 70,
    height: 70,
  },
  loginbtntext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600', 
  }


});
