import React,{Component} from 'react';
import {View,Text,ScrollView,Alert,TextInput} from 'react-native';
import Button from '../common/Button'
import {Actions} from 'react-native-router-flux';

class EmployeeList extends Component{
   state= {
     EmpList : [],
     name:"",
     Designation:"",
     FirstScreen : true
   }

   renderAlbums() {
    return this.state.EmpList.map((album,id) =><Text key ={id}>{album.name}{album.Designation}</Text>
      
    );
  }
  EmployeeAdd(){
    var ObjList ={}
    ObjList.name= this.state.name
    ObjList.Designation =this.state.Designation
    var EmpList = this.state.EmpList;
    EmpList.push(ObjList);
    this.setState({EmpList :EmpList,
      FirstScreen : true
    });
  }
  onButtonPress(){
    this.setState({FirstScreen : false})
  }
   render(){
     if(this.state.FirstScreen){
      return(
        <View>
        <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
      <Button onPress={this.onButtonPress.bind(this)}
       title="Add"
      >
        Login
      </Button>
      </View>
      )
     }
     else{
       return(
         <View>
        <TextInput
        placeholder="name"
        autoCorrect={false}
        value={this.state.name}
        onChangeText={(text)=> this.setState({name : text})}
      />
       <TextInput
        placeholder="Designation"
        autoCorrect={false}
        value={this.state.Designation}
        onChangeText={(text)=> this.setState({Designation : text})}
      />
      <Button onPress= {()=>this.EmployeeAdd()} title= "Submit"/>
      </View>
       )
     }
   }

}
export default EmployeeList