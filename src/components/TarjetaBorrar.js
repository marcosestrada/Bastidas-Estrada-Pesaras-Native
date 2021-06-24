import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity, StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
/*  <TouchableOpacity style={styles.tarjetas} 
      style={{
        backgroundColor: this.state.color,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        onPress= { () => this.props.showModal(this.props.data)} >
        <Fontisto style={styles.closeButton} name="trash" onPress={() => this.props.updateBorradas(this.props.data)}/>
        <Image style={styles.image} source={{uri: this.props.data.picture.large}}/>
        <View style={styles.nombres}>
        <Text style={styles.text}> {this.props.data.name.first} </Text>
        <Text style={styles.text}> {this.props.data.name.last} </Text>
        </View>
        <View style={styles.datos}>
          <Text style={styles.texto}> {this.props.data.email} </Text>
          <Text style={styles.texto}> {this.props.data.dob.date} ({this.props.data.dob.age})</Text>
        </View>
      </TouchableOpacity> */
    )}}

    export default TarjetaBorrar;