import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity, StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/styles'

class TarjetaSelec extends Component { 
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
        
        const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Birthday,Registered, Date,id,key} = this.props;
    return(
 
 
 <TouchableOpacity style={styles.tarjetas} 
      style={{
        backgroundColor: this.state.color,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        key={id} 
        onPress= { () => this.showModal(item)} >
        <Fontisto style={styles.closeButton} name="trash" onPress={() => this.updateBorradas(item)}/>
        <Image style={styles.image} source={{uri: img}}/>
        <View style={styles.nombres}>
        <Text style={styles.text}> {firstName} </Text>
        <Text style={styles.text}> {lastName} </Text>
        </View>
        <View style={styles.datos}>
          <Text style={styles.texto}> {Email} </Text>
          <Text style={styles.texto}> {Date} ({Birthday})</Text>
        </View>
      </TouchableOpacity>
    )}}

    export default TarjetaSelec;


    // const styles = StyleSheet.create({
    //   nombres:{
    //     flexDirection: "row",
    //   },
    //   top:{
    //     backgroundColor: 'wheat',
    //     borderRadius: 20,
    //     flexDirection: 'row',
    //     margin: 5,
    //     alignItems: 'center',
    //   },
    //   topMed:{
    //     backgroundColor: 'wheat',
    //     borderRadius: 10,
    //     flexDirection: 'row',
    //     margin: 5,
    //     alignItems: 'center',
    //     padding: 5,
    //     justifyContent: 'space-between',
    //     flexDirection:'row'
    //   },
    //   Buscador:{
    //     marginLeft: 5,
    //     borderColor: "black",
    //     borderWidth: 1,
    //     height: 40,
    //     width: 200
    //   },
    //   closeButton:{
    //       fontSize: 30,
    //       position: "absolute",
    //       right: 20,
    //       top:10, 
    //       color: 'red',     
    //   },
    //   textModal: {
    //       fontSize: 20,
    //   },
    //   modalContainer: {       
    //       flex:1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //       backgroundColor: "rgba(0,0,0,0.3)"
    //   },
    //   modal: {
    //       padding: 20,
    //       width: "100%",
    //       height: "70%",
    //       justifyContent: "flex-start",
    //       alignItems: "flex-start",
    //       backgroundColor: "wheat",
    //       borderRadius: 20,
    //       shadowColor: "black",
    //       borderStyle: "solid",
    //       borderWidth: 2,
    //       borderColor: "grey",
    //       elevation: 10
    //   },
    //   menu: {
    //     borderRightWidth: 1,
    //     borderRightColor: 'black',
    //     marginBottom: 10,
    //     marginTop: 10,
    //     paddingRight: 5,
    //     height: 35
    //   },
    //   text: {
    //       fontSize: 20
    //   },
    //   separator:{
    //       borderBottomColor: "black",
    //       borderBottomWidth: 1
    //   },
    //   image: {
    //       width: 70,
    //       height: 70,
    //       borderRadius: 50,
    //       borderWidth: 2,
    //       borderColor: 'black',
    //       margin: 5
    //   },
    //   footer:{
    //       height: '10%',
    //       width: '100%',
    //       backgroundColor:"blue",
    //       justifyContent:'center',
    //       alignItems: 'center'
    //   },
    //   borrarCompleto:{
    //     marginLeft: 3,
        
    //   },
    // /*   tarjetas: {
    //     backgroundColor: 'wheat',
    //     margin: 5,
    //     borderRadius: 20,
    //     justifyContent:'center',
    //     alignContent:'center',
    //     alignItems:'center'
    //   }, */
    //   botonInicial: {
    //     marginLeft: 150,
    //     marginTop: 20,
    //     width:105,
    //     height:40,
    //     backgroundColor:"#EDBB99",
    //     borderRadius:40
    //   },
    //   textBoton:{
    //     marginLeft:4,
    //     marginTop: 8
    //   },
    //   botonBorrarSelec:{
    //     marginLeft: 150,
    //     marginTop: 150,
    //     width:105,
    //     height:40,
    //     backgroundColor:"#EDBB99",
    //     borderRadius:40
    //   },
    //   ResetIcon:{
    //     marginLeft: 60
    //   },
    //   Input:{
    //     borderWidth: 1,
    //     borderColor: "black",
    //     padding: 8,
    //     margin: 10,
    //     width: 300,
    //     marginLeft: 20
    //   }
    
      
    // })
    