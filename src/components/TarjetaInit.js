import React, {Component} from "react";
import { 
    View, 
    Image,
    Text,
    TouchableOpacity, 
} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { styles } from '../styles/Styles'

class TarjetaInit extends Component { 
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
    const { img, firstName, lastName,Email, Birthday,Date,id} = this.props;

    return(
        <TouchableOpacity style={{backgroundColor: this.state.colorTarjeta, margin: 5, borderRadius: 20}} key={id}>
            <View style={styles.contenedorFoto}>
                <Image style={styles.image} source={{uri: img}}/>
            </View>
            <View style={styles.contenedorInfo}>
                <View style={styles.nombre}>
                    <Text style={styles.text}> {firstName} </Text>
                    <Text style={styles.text}> {lastName} </Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.texto}> {Email} </Text>
                    <Text style={styles.texto}> {Date.substring(0,10)} ({Birthday})</Text>
                </View>
                <View style ={styles.acciones}>
                    <TouchableOpacity style={styles.check}  onPress= {()=> this.props.onSelect(this.props.data)/* () =>  this.updateImports(item) */ /* ,this.CambiarColor.bind(this,'black') */}> 
                      <Text><Entypo name="check" size={24} color="white" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}}

export default TarjetaInit;



// const styles = StyleSheet.create({ 
//     top:{
//         backgroundColor: 'wheat',
//         borderRadius: 20,
//         flexDirection: 'row',
//         margin: 5,
//         alignItems: 'center'
//     },
//     menu: {
//         borderRightWidth: 1,
//         borderRightColor: 'black',
//         marginBottom: 10,
//         marginTop: 10,
//         paddingRight: 5,
//     },
//     info:{

//         flex: 1,
//         margin: 5,
     
//     },
//     selec:{
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 20
//     },
//     texto:{
//         marginTop: 5
//     },
//     agregarTarjetas:{
//         width: '100%',
//         height: '10%',
//         backgroundColor: 'wheat',
//         justifyContent: 'space-evenly'
//     },
 
//     agregarBoton:{
//         backgroundColor: '#4287f5',
//         borderRadius: 20,
//         margin: 5,
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         width: 70,

//     },
//     modalPadre:{ 
//         backgroundColor: 'rgba(0,0,0,0.1)',
//         backgroundColor: 'white',
//         flex: 1,
//         padding: 10,
//     },
//     header:{
//         height: '10%',
//         width: '100%',
//         justifyContent:'center',
//         alignItems: 'center'
//     },
  
//     contenedorFoto:{
//         justifyContent: "center",
//         alignItems: 'center',
//         borderRightWidth:1,
//         borderRightColor: 'black',
//         marginTop: 10,
//         marginBottom: 10,
//         paddingRight: 5
//       },
//     contenedorInfo:{
//         marginBottom: 10,
//         marginTop: 10,
//         alignItems: 'center'
//       },
//     nombre:{
//         flexDirection:'row'
//       },
//     guardar:{
//         fontSize: 15,
//         backgroundColor: '#4287f5',
//         width: '90%',
//         borderRadius:20,
//         height: 40,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: 20,
//         marginBottom: 2
//     },

//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         borderWidth: 1,
//         borderColor: 'black',
//         margin: 3
//     },
//     acciones:{
//         width: "100%",
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     check:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 40,
//         height: 25,
//         backgroundColor: '#4287f5',
//         borderRadius: 20,
//         margin: 5
//     },
//     cross:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//         width: 40,
//         height: 25,
//         backgroundColor: '#f24150',
//         borderRadius: 20,
//         margin: 5
//     },
//     cruz:{
//         fontWeight: 'bold',
//         color: 'white',
//         fontSize: 20
//     },
//     loader:{
//         marginTop: 180,
//     }

// })