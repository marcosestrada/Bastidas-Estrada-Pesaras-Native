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
    cambiarColor(){
        this.setState ({colorTarjeta: '#c7a64c'})
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
                    <TouchableOpacity style={styles.check}  onPress= {()=> this.props.onSelect(this.props.data)/* () =>  this.updateImports(item) */ /* ,this.CambiarColor.bind(this,'black') */}onPressIn= {()=> this.cambiarColor()}> 
                      <Text><Entypo name="check" size={24} color="white" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}}

export default TarjetaInit;


