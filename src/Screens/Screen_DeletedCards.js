import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  FlatList, 
  Text, 
  View, 
  Modal, 
  TouchableOpacity, 
  Alert,
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { styles } from '../styles/Styles';
import TarjetaBorrar from "../components/TarjetaBorrar";


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

  // Metodo para mostrar modal
  showModal(item) {
    this.setState({itemModal: item, showModal: !this.state.showModal})
  }
  
  // GetData para traer las tarjetas que se seleccionan para borrar dentro de ViewImported
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

// Borrar tarjeta definitivamente de la papelera de reciclaje
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

// Metodo async para poder recueperar las tarjetas de papelera de reciclaje a ViewImported
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

// Una vez seleccionadas las de recuperar se van de la papelera de reciclaje y no se muestran mas
updateRecuperar(item){
  let aRecuperar = this.state.usuariosARecuperar
  aRecuperar.push(item)
  this.setState({usuariosARecuperar: aRecuperar})
}


  render(){
    const { img, firstName, lastName, Email, city, Street, StreetNumber, Telephone, Country, Bithday, Registered, Date, id} = this.props;

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
       
      <ScrollView>
          <FlatList style={styles.flat}
            data={this.state.usuariosABorrar}
            keyExtractor={ (item, idx) => idx.toString()}
            renderItem={ ({item}) =>
            (
            
            <TarjetaBorrar
              updateRecuperar = {this.updateRecuperar.bind(this)}
              showModal = {this.showModal.bind(this)}
              img={img}
              firstName={firstName}
              lastName={lastName}
              Email={Email}
              city={city}
              State={Street}
              StreetNumber={StreetNumber}
              Telephone={Telephone}
              Country={Country}
              Bithday={Bithday}
              Registered={Registered} 
              Date={Date}
              id={id} 
              data = {item}
            >
            </TarjetaBorrar>
            )
            }
          />

        <Modal visible={this.state.showModal}
               animationType="slide"
               transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
            { this.state.itemModal
            ? <>
              <Text style={styles.textModal}>
                <Text style={{fontWeight: "bold"}}>Dirección:</Text>
                {' '}{this.state.itemModal.location.street.number}, {this.state.itemModal.location.street.name}
              </Text>
              <Text style={styles.textModal}> 
                <Text style={{fontWeight: "bold"}}>Ciudad:</Text>
                {' '}{this.state.itemModal.location.city}
              </Text>
              <Text style={styles.textModal}> 
                <Text style={{fontWeight: "bold"}}>Estado:</Text>
                {' '} {this.state.itemModal.location.state}
              </Text>
              <Text style={styles.textModal}> 
                <Text style={{fontWeight: "bold"}}>País:</Text>
                {' '} {this.state.itemModal.location.country}
              </Text>
              <Text style={styles.textModal}> 
                <Text style={{fontWeight: "bold"}}>Código postal:</Text>
                {' '} {this.state.itemModal.location.postcode}
              </Text> 
              <Text style={styles.textModal}> 
                <Text style={{fontWeight: "bold"}}>Fecha de registro:</Text>
                {' '} {this.state.itemModal.registered.date}
              </Text>
              <Text style={styles.textModal}>   
                <Text style={{fontWeight: "bold"}}>Telefono:</Text>
                {' '} {this.state.itemModal.cell}
              </Text>
            <Text style={styles.textModal}> 
              <Text style={{fontWeight: "bold"}}>Info. Adicional:</Text>
              {' '}
            </Text>
            <Text style={styles.closeButton} onPress={() => this.setState({showModal:false})}> X </Text>
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
