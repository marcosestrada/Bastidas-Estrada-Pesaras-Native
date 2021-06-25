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
        backgroundColor: this.state.color,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        key={this.props.data.login.uuid} 
        onPress= { () => this.showModal(this.props.data)} >
        
        <Image style={styles.image} source={{uri: this.props.data.picture.large}}/>
          <View style={styles.nombres}>
            <Text style={styles.text}> {this.props.data.name.first} </Text>
            <Text style={styles.text}> {this.props.data.name.last} </Text>
          </View>
          <View style={styles.datos}>
            <Text style={styles.texto}> {this.props.data.email} </Text>
            <Text style={styles.texto}> {this.props.data.dob.date} ({this.props.data.dob.age})</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.updateRecuperar(this.props.data)}>
            <Text>Recuperar Contacto</Text>
            <MaterialCommunityIcons name="file-restore" size={24} color="black" />
          </TouchableOpacity>
      </TouchableOpacity>
    )
}}

export default TarjetaBorrar;