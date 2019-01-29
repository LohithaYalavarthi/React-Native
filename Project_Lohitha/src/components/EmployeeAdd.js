import React ,{Component}  from 'react';
import {View,Text,Alert} from 'react-native'
import Button from  '../common/Button'
import { Actions } from 'react-native-router-flux';

class EmployeeAdd extends Component{
  render(){
    return(
      <View>
        <Text>Hi you did it </Text>
        <Button onPress= {()=>Actions.EmployeeList()} title= "Submit"/>
      </View>

    )
  }

}


export default EmployeeAdd;