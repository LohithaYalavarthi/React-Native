import React from 'react';
import {Text,TextInput,View} from 'react-native';


const Input =(props)=>{
  const {onChangeText,placeholder,label,value} = props
  return(
    <View >
      <Text >{label}</Text>
      <TextInput
      onChangeText ={onChangeText}
      value= {value}
      style={{height: 20 , width : 200
       }}
      placeholder={placeholder}
      ></TextInput>
    </View>  
  )
};
const style= {
  
}
export default Input;
