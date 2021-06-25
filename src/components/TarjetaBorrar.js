import React, {Component} from "react";
import { 
  View, 
  Image,
  Text,
  TouchableOpacity,
   
} from 'react-native'
import { styles } from '../styles/Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


class TarjetaBorrar extends Component { 
    constructor() {
        super();
        this.state = {
            showModal: false,
            users:[],
            activity: false,
            colorTarjeta: 'wheat',
            usuariosAImport:[],
            cantidadagregada: '0',
            visibilidad: 'flex',
            display: 'none',
            titulo: 'Selecciona la cantidad de tarjetas que quieres importar'
        }
    }
  
render(){
    return(
 
      <TouchableOpacity style={styles.tarjetas} 
        style={{
        backgroundColor: this.state.colorTarjeta,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        key={this.props.data.login.uuid} 
         >
        
        <Image style={styles.image} source={{uri: this.props.data.picture.large}}/>
          <View style={styles.nombres}>
            <Text style={styles.text}> {this.props.data.name.first} </Text>
            <Text style={styles.text}> {this.props.data.name.last} </Text>
          </View>
          <View style={styles.datos}>
            <Text style={styles.texto}> {this.props.data.email} </Text>
            <Text style={styles.texto}> {this.props.data.dob.date.substring(0,10)} ({this.props.data.dob.age})</Text>
          </View>
          <TouchableOpacity style={{flexDirection: 'row', backgroundColor:'#4287f5', width: 170, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 5}} onPress={() => this.props.updateRecuperar(this.props.data)}>
            <Text style={{color: 'white', ontWeight:'bold',}}>Recuperar Contacto</Text>
            <MaterialCommunityIcons name="file-restore" size={24} color="white" />
          </TouchableOpacity>
      </TouchableOpacity>
    )
}}

export default TarjetaBorrar;