import React,{Component} from 'react';
 import {Router,Scene} from 'react-native-router-flux';
 import EmployeeAdd from './EmployeeAdd';
 import EmpAff from './EmpAff';
import {View,Text} from 'react-native';
import {createStackNavigator,createAppNavigator} from 'react-navigation';

import EmployeeList from './EmployeeList';
const App =createAppNavigator(AppStackNavigator);
const AppStackNavigator=  createStackNavigator({
  WelcomeList :{
    screen: EmpAff
  },
  Profile : {
    screen : EmployeeAdd
  }
})

export default App;