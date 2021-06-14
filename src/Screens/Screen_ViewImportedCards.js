import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  FlatList, 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ActivityIndicator, 
  Button, 
  Modal, 
  TouchableOpacity, 
  Alert,
  ScrollView
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export class Screen_ViewImportedCards extends Component {
  constructor() {
      super();
      this.state = {
          importedUsers: [],
          showModal: false,
          itemModal: null
      }
  }

  showModal(item) {
    this.setState({itemModal: item, showModal: !this.state.showModal})
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

  borrarTarjeta = (idTarjeta)=>{
    let resultado = this.state.importedUsers.filter( (item)=> {
  
        return item.login.uuid !== idTarjeta;
    })
    this.setState({importedUsers: resultado});
  }

  borrarCompleto = ()=> {
    this.setState({importedUsers: []})
  }

  render(){
    const values = this.state.importedUsers.map(item =>
            
      <TouchableOpacity style={styles.tarjetas} key={item.login.uuid} onPress= { () => this.showModal(item)} >
        <Text style={styles.closeButton} onPress={this.borrarTarjeta}>X </Text>
        <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
        <Text style={styles.text}> {item.name.first} </Text>
        <Text style={styles.text}> {item.name.last} </Text>
        <Text style={styles.text}> {item.email} </Text>
        <Text style={styles.text}> {item.dob.date} ({item.dob.age})</Text>
      </TouchableOpacity>
              
        )
    return(
      <View >
        <View style= {styles.top}>
          <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
              <Text><Entypo name="home" size={24} color="black" /> Menu</Text>
          </TouchableOpacity>
        <View>
          <Text> Tarjetas Importadas </Text>
          
          <Text onPress={this.borrarCompleto} style={styles.borrarCompleto}> BORRAR TARJETAS IMPORTADAS</Text>
        </View>
        </View>
       
        <ScrollView>{values}
        <Modal visible={this.state.showModal}
                animationType="slide"
                transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            { this.state.itemModal
                            ?
                            <>
                            <Text style={styles.textModal}>Direccion: {
                            this.state.itemModal.location.street.number}, {this.state.itemModal.location.street.name}</Text>
                            <Text style={styles.textModal}> Ciudad: {
                            this.state.itemModal.location.city}</Text>
                            <Text style={styles.textModal}> Estado: {
                            this.state.itemModal.location.state}</Text>
                            <Text style={styles.textModal}> País: {
                            this.state.itemModal.location.country}</Text>
                            <Text style={styles.textModal}> Codgio Postal: {
                            this.state.itemModal.location.postcode}</Text> 
                            <Text style={styles.textModal}> Fecha de Registro: {
                            this.state.itemModal.registered.date}</Text>
                            <Text style={styles.textModal}> Telefono: {
                            this.state.itemModal.cell}</Text>
                            <Text style={styles.textModal}> Información Adicional: (aca iria lo que la gente edita de la tarjeta, en la parte de editar) </Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:false})}>X</Text>
                            </>
                            :<Text>Nothing to show.</Text>
                            }
                        </View>
                    </View>
                </Modal>
        </ScrollView>
        <TouchableOpacity onPress={this.getData.bind(this)}>
        <View><Text>Importar Datos</Text></View>
        </TouchableOpacity>
      </View>
    )

  }
    
}

const styles = StyleSheet.create({
  top:{
    backgroundColor: 'wheat',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  closeButton:{
      fontSize: 25,
      position: "absolute",
      right: 20,
      top:10,      
  },
  textModal: {
      fontSize: 20
  },
  modalContainer: {       
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)"
  },
  modal: {
      padding: 20,
      width: "100%",
      height: "70%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "wheat",
      borderRadius: 20,
      shadowColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "grey",
      elevation: 10
  },
  menu: {
    borderRightWidth: 1,
    borderRightColor: 'black',
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 5,
    height: 35
  },
  text: {
      fontSize: 20
  },
  separator:{
      borderBottomColor: "black",
      borderBottomWidth: 1
  },
  image: {
      width: 50,
      height: 50
  },
  footer:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
  borrarCompleto:{
    backgroundColor: 'red',
    width: 225
  },
  tarjetas: {
    margin: 5,
    backgroundColor: 'wheat',
    borderRadius: 20
  }
  
})

