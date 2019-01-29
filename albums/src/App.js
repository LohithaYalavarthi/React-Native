import React, { Component } from 'react';
import Router from './Router';
import {View,Text} from 'react-native';
import EmployeeList from '../src/components/EmployeeList'
class App extends Component {
  render() {
    return (
         <Router/>
        //  <View>
        //   <Text>Hello</Text>
        // </View>
    );
  }
}

export default App;
