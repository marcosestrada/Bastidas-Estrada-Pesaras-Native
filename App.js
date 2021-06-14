import { Component} from "react"; 
import {Screen_Menu} from "./src/Screens/Screen_Menu";
import {Screen_Flatlist} from "./src/Screens/Screen_Flatlist";
import {Screen_ViewImportedCards} from "./src/Screens/Screen_ViewImportedCards";
import {Screen_ModifyCards} from "./src/Screens/Screen_ModifyCards";
import {Screen_DeletedCards} from "./src/Screens/Screen_DeletedCards";
import {Screen_ImportCards} from "./src/Screens/Screen_ImportCards";
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
        <Stack.Screen name="Screen_Menu" component={Screen_Menu} options={{title: 'MENU'}}/>
        <Stack.Screen name="Screen_ImportCards" component={Screen_ImportCards} options={{title: 'IMPORTAR TARJETAS'}}/>
        <Stack.Screen name="Screen_Flatlist" component={Screen_Flatlist} />
        <Stack.Screen name="Screen_ViewImportedCards" component={Screen_ViewImportedCards} options={{title: 'TARJETAS IMPORTADAS'}}/>
        <Stack.Screen name="Screen_ModifyCards" component={Screen_ModifyCards} options={{title: 'MODIFICAR TARJETAS'}}/>
        <Stack.Screen name="Screen_DeletedCards" component={Screen_DeletedCards} options={{title: 'TARJETAS ELIMINADAS'}}/>
      </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

export default App;

