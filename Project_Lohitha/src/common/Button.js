import React from 'react';
import {Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';


const Button =(props)=>{
  const {buttonStyle,textStyle} = styles
  const {onPress,title} = props
  return(
    <TouchableOpacity  style= {buttonStyle} onPress={onPress} >
    <Text >
     {title}
      </Text>
    </TouchableOpacity>
    
  )
}


const styles= {
  textStyle: {
    alignSelf : 'center',
    color :'#007aff',
    fontSize : 16 ,
    fontWeight : '600',
    paddingTop :10,
    paddingBottom : 10
  },
  buttonStyle: {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : "red",
    paddingBottom :10,
    fontWeight : '500'
  }}
export default Button;