import React, {Component} from "react";
import { 
  View, 
  TextInput, 
  Image,
  Text,
  Modal,  
  TouchableOpacity, 
} from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { styles } from '../styles/Styles';


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
            titulo: 'Selecciona la cantidad de tarjetas que quieres importar',
            comentario: [],
            handler: []  
        }
    }
    cambiarColor(){
      this.setState ({colorTarjeta: '#d95750'})
   }
  render(){
      const {itemModal} = this.props  
      const { comentario} = this.state;

    return(
      <TouchableOpacity /* style={styles.tarjetas} */ 
        style={{
        backgroundColor: this.state.colorTarjeta,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        onPress= {() => this.setState({showModal: true})}>

        <View>
          <Fontisto style={styles.closeButton} name="trash" onPress={() => {this.props.updateBorradas(this.props.data); this.cambiarColor()}} />
          <Image style={styles.image} source={{uri: this.props.data.picture.large}}/>
          
          <View style={styles.nombres}>
            <Text style={styles.text}> {this.props.data.name.first} </Text>
            <Text style={styles.text}> {this.props.data.name.last} </Text>
          </View>
          <View style={styles.datos}>
            <Text style={styles.texto}> {this.props.data.email} </Text>
            <Text style={styles.texto}> {this.props.data.dob.date} ({this.props.data.dob.age})</Text>
          </View>
        
          <Modal visible={this.state.showModal}
                 animationType="slide"
                 transparent={true}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                      {/* <Text style={{fontWeight: "bold"}}>Dirección: {this.props.data.name.first}, {this.props.data.location.street.name}</Text> */}
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>Ciudad:</Text>
                        {' '}{this.props.data.location.city}
                      </Text>
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>Estado:</Text>
                        {' '} {this.props.data.location.state}
                      </Text>
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>País:</Text>
                        {' '} {this.props.data.location.country}
                      </Text>
                      <Text style={styles.textModal}>
                        <Text style={{fontWeight: "bold"}}>Código postal:</Text>
                        {' '} {this.props.data.location.postcode}
                      </Text> 
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>Fecha de registro:</Text>
                        {' '} {this.props.data.registered.date.substring(0,10)}
                      </Text>
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>Telefono:</Text>
                        {' '} {this.props.data.cell}
                      </Text> 
                      <Text style={styles.textModal}> 
                        <Text style={{fontWeight: "bold"}}>Comentario:{' '}{comentario}</Text>
                          {' '}
                        </Text>
                      <TextInput style={styles.Input} placeholder="Agregar Detalle" onChangeText={text => {this.setState({handler: text})}}/>
                        <TouchableOpacity onPress={()=> this.setState({comentario: this.state.handler})}>
                        <View>
                          <Text style={styles.Input}>Agregar Comentario</Text>
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.closeButton} onPress={() => this.setState({showModal: false})}> X </Text>
                    </View>
                  </View>
          </Modal>
        </View>
      </TouchableOpacity>
    )
}}

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
    