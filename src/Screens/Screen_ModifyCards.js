import React, { Component} from "react"; 
import {  
  Text, 
  Image, 
  ActivityIndicator, 
  Button, 
  Modal, 
  TouchableOpacity, 
  Alert
} from 'react-native';

export class Screen_ModifyCards extends Component {
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
            <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
            <Text style={styles.text}> {item.name.first} </Text>
            <Text style={styles.text}> {item.name.last} </Text>
      </Text>
      )
      return(
        <Text>Modificar Tarjetas</Text>
      )
  }
    
}

