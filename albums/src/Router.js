import React from 'react';
import { Scene, Router, Actions,Stack } from 'react-native-router-flux'
import EmployeeList from './components/EmployeeList'
import EmployeeAdd from './components/EmployeeAdd'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="EmployeeList" 
        onRight={() => Actions.EmployeeAdd()}
        rightTitle="Add"
        component={EmployeeList} title="Employee List" 
        initial
        />

       <Scene key="EmployeeAdd" 
        component={EmployeeAdd} title="Employee Add" />
       </Stack>
    </Router>
  );
};

export default RouterComponent;
