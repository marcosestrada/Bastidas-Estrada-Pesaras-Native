import { Component} from "react"; 
import {Menu} from "./src/Screens/Menu";
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
class App extends Component {

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

export default App;

