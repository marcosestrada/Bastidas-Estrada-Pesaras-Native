import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator, Button, Modal, TouchableOpacity, Alert, AsyncStorage} from 'react-native';
import React, { Component} from "react"; 

export class Screen_ViewImportedCards extends Component {
  constructor() {
      super();
      this.state = {
          importedUsers: [],
      }
  }
  
  componentDidMount() {
      this.unsuscribe = this.props.navigation.addListener("focus", () => {
          this.getData()
      })
      Alert.alert("Mount");
  }

  componentDidUpdate() {
    Alert.alert("Update");
  }

  componentWillUnmount() {
    // this.unsuscribe();
  }

  async getData() {
    try{
        const resultado = await AsyncStorage.getItem("Users");
        this.setState({importedUsers: JSON.parse(resultado)});
        return resultado;
    } catch(e){
        console.log("Error: " + e)
    }
  }

  render(){
    const values = this.state.importedUsers.map( item =>
      <Text key={item.login.uuid} style={{fontsize:20}}>
        {item.name.first}
      </Text>
      )
  }
    
}

