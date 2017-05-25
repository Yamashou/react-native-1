/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import Login from './src/components/Login/Login';
import api from './src/test';
export default class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      rovers: []
    }
  }

  componentWillMount(){
    api.getRovers().then((res) => {
      this.setState({
        rovers: res.title
      })
    });
  }
  render() {
    console.log("Title: ", this.state.rovers);
    return (
      <Login />
    );
  }
}




const styles = StyleSheet.create({
  button:{
    backgroundColor: '#4CAF50',
  },
  title:{
    color:'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle:{
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
  titleWrapper:{
    justifyContent: 'center',
    flex:1,

  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
