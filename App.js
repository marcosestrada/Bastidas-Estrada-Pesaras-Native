import React, { Component} from "react"; 
import {Screen_Flatlist} from "./src/Screens/Screen_Flatlist";
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
class App extends Component {

  render() {
    return (
      <NavigationContainer>
  
          <Screen_Flatlist />
       
      </NavigationContainer>
      
    )
  }
}

export default App;

