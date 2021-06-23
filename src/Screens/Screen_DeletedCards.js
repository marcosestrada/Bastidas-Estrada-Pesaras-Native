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
import { styles } from '../styles/styles'

export class Screen_DeletedCards extends Component {
  constructor() {
      super();
      this.state = {
          usuariosABorrar: [],
          showModal: false,
          itemModal: null,
          visibilidad: 'flex',
          display: 'none',
          showModal: false,
          color: 'wheat',
          usuariosARecuperar: [],
         
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



//   async borrarDefinitiva(usuariosABorrar){
//     try{
//     let eliminados =  await AsyncStorage.getItem("Papelera");
//     console.log(usuariosABorrar)
//     console.log(eliminados)
            
//             if (eliminados != null) {
//              for(let i=0; i<this.state.usuariosABorrar.length; i++){

//                eliminados = eliminados.filter( (item) => {
//                  return this.state.usuariosABorrar[i].login.uuid !=item.login.uuid
//                  // return importedUsers != usuariosABorrar
//                 })
//               } 
//               this.setState({usuariosABorrar: eliminados});
//                //filtro aquellos que selecciono. Filtro aquellos que son distintos a this.state.usuariosABorrar
//               const jsonUsers = JSON.stringify(eliminados);
//               await AsyncStorage.setItem("Papelera", jsonUsers);
//             }
//   }catch(e){
//     console.log("Error: " + e)
// }}

async borrarDefinitiva(){
  try{
    await AsyncStorage.removeItem('Papelera')
    let aBorrar = this.state.usuariosABorrar
    aBorrar.splice(0, aBorrar.length)
    this.setState({usuariosABorrar: aBorrar})
    console.log(aBorrar)
  }
  catch(e){
    console.log("Error: " + e)
}
}


async recuperarTarjeta(usuariosABorrar){
  try{
      let storage =  await AsyncStorage.getItem("Papelera");
            storage = JSON.parse(storage)
            if (storage != null) {
             for(let i=0; i<this.state.usuariosARecuperar.length; i++){

               storage = storage.filter( (item) => {
                 
                 return this.state.usuariosARecuperar[i].login.uuid !=item.login.uuid
                })
              } 
              this.setState({usuariosABorrar: storage});
              const jsonUsers = JSON.stringify(storage);
              await AsyncStorage.setItem("Papelera", jsonUsers);
            }
      let recuperadas =  await AsyncStorage.getItem("Users");
      recuperadas = JSON.parse(recuperadas)
      if (recuperadas == null) recuperadas = []
      this.state.usuariosARecuperar.map(usuario => {
          recuperadas.push(usuario)
      })
      const jsonUsers = JSON.stringify(recuperadas);
      await AsyncStorage.setItem("Users", jsonUsers);
  }catch(e){
      console.log("Error: " + e)
  }
}

updateRecuperar(item){
  let aRecuperar = this.state.usuariosARecuperar
  aRecuperar.push(item)
  this.setState({usuariosARecuperar: aRecuperar})
  
}

  render(){
    
    const values = this.state.usuariosABorrar.map(item =>
            
      // <TouchableOpacity style={styles.tarjetas} key={item.login.uuid} onPress= { () => this.showModal(item)} >
      //   <Fontisto style={styles.closeButton} name="trash" onPress={() => this.updateBorradas(item)}/>
      //   <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
      //   <Text style={styles.text}> {item.name.first} </Text>
      //   <Text style={styles.text}> {item.name.last} </Text>
      //   <Text style={styles.text}> {item.email} </Text>
      //   <Text style={styles.text}> {item.dob.date} ({item.dob.age})</Text>
      // </TouchableOpacity>
      <TouchableOpacity style={styles.tarjetas} 
      style={{
        backgroundColor: this.state.color,  
        margin: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}
        key={item.login.uuid} 
        onPress= { () => this.showModal(item)} >
        <Image style={styles.image} source={{uri: item.picture.large}}/>
        <View style={styles.nombres}>
        <Text style={styles.text}> {item.name.first} </Text>
        <Text style={styles.text}> {item.name.last} </Text>
        </View>
        <View style={styles.datos}>
          <Text style={styles.texto}> {item.email} </Text>
          <Text style={styles.texto}> {item.dob.date.substring(0,10)} ({item.dob.age})</Text>
        </View>
        <TouchableOpacity onPress={() => this.updateRecuperar(item)}>
          <Text>Recuperar Contacto</Text>
          <MaterialCommunityIcons name="file-restore" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
        )
    return(
      <View  style= {styles.bigPoppa} >
        <View style= {styles.top}>
          <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
              <Text><Entypo name="home" size={24} color="black" /> Menu</Text>
          </TouchableOpacity>
          <View style= {styles.contenedorTitulo} >
            <Text style= {styles.tituloDelete}>Papelera</Text>
            <Fontisto style={{fontSize: 20 }} name="trash" />
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
        <View style={styles.contenedorBoton}>
        <TouchableOpacity style={styles.botonInicial} onPress={this.borrarDefinitiva.bind(this)} >
          <Text style={styles.textBoton}>LimpiarPapelera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonInicial} onPress={this.getData.bind(this)}>
          <Text style={styles.textBoton}>Ver Tarjetas Borradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonInicial} onPress={this.recuperarTarjeta.bind(this)}>
          <Text style={styles.textBoton}>Recuperar Tarjetas Seleccionadas</Text>
        </TouchableOpacity>
          </View>

      </View>
    )

  }
    
}

// const styles = StyleSheet.create({
//   bigPoppa:{
//     justifyContent: 'center',
 
//   },
//   contenedorBoton:{
//     width: '100%',
//     alignItems: 'center'
//   },

//   tituloDelete:{
//       fontSize: 20,
//       marginRight: 10
//   },
//   contenedorTitulo:{
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//     flexDirection: 'row'
//   },
//   top:{
//     backgroundColor: 'wheat',
//     borderRadius: 20,
//     flexDirection: 'row',
//     margin: 5,
//     alignItems: 'center',
//   },
//   closeButton:{
//       fontSize: 30,
//       position: "absolute",
//       right: 20,
//       top:10,      
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
//     borderRightWidth: 3,
//     borderRightColor: 'black',
//     marginBottom: 10,
//     marginTop: 10,
//     paddingRight: 20,
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
//       width: 50,
//       height: 50
//   },
//   footer:{
//       height: '10%',
//       width: '100%',
//       backgroundColor:"blue",
//       justifyContent:'center',
//       alignItems: 'center'
//   },
//   borrarCompleto:{
//     marginLeft: 30,
//     backgroundColor: '#EDBB99',
//     width: 255
//   },
//   tarjetas: {
//     margin: 5,
//     backgroundColor: 'wheat',
//     borderRadius: 20,
//     width: 300,
//   },
//   botonInicial: {
//     width: 150,
//     height:50,
//     backgroundColor:"#EDBB99",
//     borderRadius:40,
//     justifyContent: 'center',
//     marginTop: 10
//   },
//   textBoton:{
//     width: 300,
//     marginLeft: 3,
//     marginRight: 3
    
//   },
//   botonBorrarSelec:{
//     marginLeft: 150,
//     marginTop: 150,
//     width:105,
//     height:40,
//     backgroundColor:"#EDBB99",
//     borderRadius:40
//   },

  
// //CSS COPIADO DE VIEWIMPORTEDCARDS  
// nombres:{
//   flexDirection: "row",
// },
// top:{
//   backgroundColor: 'wheat',
//   borderRadius: 20,
//   flexDirection: 'row',
//   margin: 5,
//   alignItems: 'center',
// },
// topMed:{
//   backgroundColor: 'wheat',
//   borderRadius: 10,
//   flexDirection: 'row',
//   margin: 5,
//   alignItems: 'center',
//   padding: 5,
//   justifyContent: 'space-between',
//   flexDirection:'row'
// },
// Buscador:{
//   marginLeft: 5,
//   borderColor: "black",
//   borderWidth: 1,
//   height: 40,
//   width: 200
// },
// closeButton:{
//     fontSize: 30,
//     position: "absolute",
//     right: 20,
//     top:10, 
//     color: 'red',     
// },
// textModal: {
//     fontSize: 20,
// },
// modalContainer: {       
//     flex:1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.3)"
// },
// modal: {
//     padding: 20,
//     width: "100%",
//     height: "70%",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     backgroundColor: "wheat",
//     borderRadius: 20,
//     shadowColor: "black",
//     borderStyle: "solid",
//     borderWidth: 2,
//     borderColor: "grey",
//     elevation: 10
// },
// menu: {
//   borderRightWidth: 3,
//   borderRightColor: 'black',
//   marginBottom: 10,
//   marginTop: 10,
//   paddingRight: 10,
//   height: 35
// },
// text: {
//     fontSize: 20
// },
// separator:{
//     borderBottomColor: "black",
//     borderBottomWidth: 1
// },
// image: {
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: 'black',
//     margin: 5
// },
// footer:{
//     height: '10%',
//     width: '100%',
//     backgroundColor:"blue",
//     justifyContent:'center',
//     alignItems: 'center'
// },



// })
