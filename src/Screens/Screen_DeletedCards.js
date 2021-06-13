import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  Text, 
  View, 
} from 'react-native';

export class Screen_DeletedCards extends Component {
  constructor() {
      super();
      this.state = {
          
      }
  }
  
  componentDidMount() {

  }

  render(){

    return(
      <View>
        <Text> Tarjetas Borradas</Text>
      </View>
    )

  }
    
}

