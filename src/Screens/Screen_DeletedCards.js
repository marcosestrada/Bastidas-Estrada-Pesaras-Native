import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  Text, 
  View, 
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export class Screen_DeletedCards extends Component {
  constructor() {
      super();
      this.state = {
          usuariosABorrar: [],

      }
  }
  
  async getData() {
    try{
        const resultado = await AsyncStorage.getItem("Papelera");
        if (resultado == null)
          Alert.alert("No hay usuarios borrados")
          else this.setState({usuariosABorrar: JSON.parse(resultado)});
        return resultado;
        
    } catch(e){
        console.log("Error: " + e)
    }
    console.log(resultado)
  }

  render(){

    return(
      <View>
        <TouchableOpacity onPress= {this.getData.bind(this)}>
        <Text> VER Tarjetas Borradas</Text>
        </TouchableOpacity>
        
      </View>
    )

  }
    
}

