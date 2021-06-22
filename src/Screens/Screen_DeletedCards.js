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
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';


export class Screen_DeletedCards extends Component {
  constructor() {
      super();
      this.state = {
          usuariosABorrar: [],
<<<<<<< HEAD
          showModal: false,
          itemModal: null,
=======
          visibilidad: 'flex',
          display: 'none',
          titulo: 'Selecciona la cantidad de tarjetas que quieres importar',
          showModal: false
>>>>>>> ba74bfd889f546c4a05b0556483149d1cea1dc0b

      }
  }

  showModal(item) {
    this.setState({itemModal: item, showModal: !this.state.showModal})
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
  }

  render(){
    const values = this.state.usuariosABorrar.map(item =>
            
      <TouchableOpacity style={styles.tarjetas} key={item.login.uuid} onPress= { () => this.showModal(item)} >
        <Fontisto style={styles.closeButton} name="trash" onPress={() => this.updateBorradas(item)}/>
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
          <TouchableOpacity onPress={this.borrarTarjetas}>
          <View ><Text >Borrar tarjetas seleccionadas</Text></View>
        </TouchableOpacity>
        <View>
          <Text> Tarjetas Importadas </Text>
          
          <Text onPress={this.borrarCompleto} style={styles.borrarCompleto}> CERRAR TARJETAS IMPORTADAS <MaterialCommunityIcons name="close-box-multiple" size={21} color="black" /></Text>
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
                            <Text style={styles.textModal}><Text style={{fontWeight: "bold"}}>Dirección:</Text>{' '}{
                            this.state.itemModal.location.street.number}, {this.state.itemModal.location.street.name}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Ciudad:</Text>{' '}{
                            this.state.itemModal.location.city}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Estado:</Text>{' '} {
                            this.state.itemModal.location.state}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>País:</Text>{' '} {
                            this.state.itemModal.location.country}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Código postal:</Text>{' '} {
                            this.state.itemModal.location.postcode}</Text> 
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Fecha de registro:</Text>{' '} {
                            this.state.itemModal.registered.date}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Telefono:</Text>{' '} {
                            this.state.itemModal.cell}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Info. Adicional:</Text>{' '} (aca iria lo que la gente edita de la tarjeta, en la parte de editar) </Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:false})}>X</Text>
                            </>
                            :<Text>Nothing to show.</Text>
                            }
                        </View>
                    </View>
                </Modal>
        </ScrollView>
        <TouchableOpacity onPress={this.getData.bind(this)}>
        <View style={styles.botonInicial}><Text style={styles.textBoton}>Importar Datos</Text></View>
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
      fontSize: 30,
      position: "absolute",
      right: 20,
      top:10,      
  },
  textModal: {
      fontSize: 20,
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
      justifyContent: "flex-start",
      alignItems: "flex-start",
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
    marginLeft: 30,
    backgroundColor: '#EDBB99',
    width: 255
  },
  tarjetas: {
    margin: 5,
    backgroundColor: 'wheat',
    borderRadius: 20
  },
  botonInicial: {
    marginLeft: 150,
    marginTop: 150,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  },
  textBoton:{
    marginLeft:4,
    marginTop: 8
  },
  botonBorrarSelec:{
    marginLeft: 150,
    marginTop: 150,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  }

  
})
