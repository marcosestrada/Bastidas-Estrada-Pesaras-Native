import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TextInput,
  Modal, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  SafeAreaView,
  FlatList,
  
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import TarjetaSelec from "../components/TarjetaSelec";
import { styles } from '../styles/styles'





export class Screen_ViewImportedCards extends Component {
  constructor() {
      super();
      this.state = {
          importedUsers: [],
          showModal: false,
          itemModal: null,
          usuariosABorrar: [],
          search: '',
          color: 'wheat',
          comentario: []  
      }
      this.borrarTarjetas = this.borrarTarjetas.bind(this)
  }

  showModal(item) {
    this.setState({itemModal: item, showModal: !this.state.showModal})
  }
  
  async getData() {
    try{
        const resultado = await AsyncStorage.getItem("Users");
        if (resultado == null)
          Alert.alert("No hay usuarios importados")
          else this.setState({importedUsers: JSON.parse(resultado)});
        return resultado;
    } catch(e){
        console.log("Error: " + e)
    }
  }

  //Ultimos cambios que hice
  //Orden ascendente y descendente
  az = () => {
    this.state.importedUsers.sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.setState({importedUsers: this.state.importedUsers.sort(function(a, b) { return a.name.first > b.name.first})})
  } 
  za = () => {
    this.state.importedUsers.sort((a, b) => b.name.first.localeCompare(a.name.first))
    this.setState({importedUsers: this.state.importedUsers.sort(function(a, b) { return a.name.first < b.name.first})})
  }

  //  buscador
  filter(text){
    if (text.length > 0) {
      const resultadoBusqueda = this.state.importedUsers
      const filtrado = resultadoBusqueda.filter((item) =>{
      const itemData = item.name.first.toUpperCase()
      const lastName = item.name.last.toUpperCase()
      const age = item.dob.age.toString()
      const textData = text.toUpperCase()
      console.log(age);
      return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
        )})
      this.setState({
          importedUsers: filtrado,
          textoBuscar: text,
      })
    } else {
      this.setState({
        importedUsers:this.state.importedUsers}) 
    }
  }

  updateSearch = (text) => {
    const resultadoBusqueda = this.state.importedUsers
    const filtrado = resultadoBusqueda.filter((item) =>{
    const itemData = item.name.first.toUpperCase();
    const lastName = item.name.last.toUpperCase();
    const age = item.dob.age.toString();
    const textData = this.state.search.toUpperCase();
    return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
    )
    })
  };

  // borrarTarjeta = (idTarjeta)=>{
  //   let resultado = this.state.importedUsers.filter( (item)=> {
  
  //       return item.login.uuid !== idTarjeta;
  //   })
  //   this.setState({importedUsers: resultado});
  // }

  borrarCompleto = ()=> {
    this.setState({importedUsers: []})
  }

//Borrar tarjetas:
async borrarTarjetas(usuariosABorrar){
  try{
      let storage =  await AsyncStorage.getItem("Users");
            storage = JSON.parse(storage)
            if (storage != null) {
             for(let i=0; i<this.state.usuariosABorrar.length; i++){

               storage = storage.filter( (item) => {
                 
                 return this.state.usuariosABorrar[i].login.uuid !=item.login.uuid
                })
              } 
              this.setState({importedUsers: storage});
              const jsonUsers = JSON.stringify(storage);
              await AsyncStorage.setItem("Users", jsonUsers);
            }
      let borradas =  await AsyncStorage.getItem("Papelera");
      borradas = JSON.parse(borradas)
      if (borradas == null) borradas = []
      this.state.usuariosABorrar.map(usuario => {
          borradas.push(usuario)
      })
      const jsonUsers = JSON.stringify(borradas);
      await AsyncStorage.setItem("Papelera", jsonUsers);
  }catch(e){
      console.log("Error: " + e)
  }
}

async comentarioAAgregar(importedUsers){
  try{
      let storage =  await AsyncStorage.getItem("Users");
            storage = JSON.parse(storage)
            if (storage != null) {
             for(let i=0; i<this.state.importedUsers.length; i++){

               storage = storage.filter( (item) => {
                 
                 return this.state.importedUsers[i] == item.comentario
                })
              } 
              this.setState({importedUsers: storage});
              const jsonUsers = JSON.stringify(storage)
              await AsyncStorage.setItem("Users", jsonUsers);
            }
      let comentadas =  await AsyncStorage.getItem("Comentarios");
      comentadas = JSON.parse(comentadas)
      if (comentadas == null) comentadas = []
      this.state.importedUsers.map(usuario => {
        comentadas.push(usuario)
      })
      const jsonUsers = JSON.stringify(comentadas);
      await AsyncStorage.setItem("Comentarios", jsonUsers);
  }catch(e){
      console.log("Error: " + e)
  }
}

updateBorradas(item){
  let aBorrar = this.state.usuariosABorrar
  aBorrar.push(item)
  this.setState({usuariosABorrar:aBorrar})
  this.setState({color: '#e8665d'})
}



  render(){
    const { search } = this.state;
    const { comentario} = this.state;
    

    
    // const values = this.state.importedUsers.map(item =>
            
      // <TouchableOpacity style={styles.tarjetas} 
      // style={{
      //   backgroundColor: this.state.color,  
      //   margin: 5,
      //   borderRadius: 20,
      //   justifyContent:'center',
      //   alignContent:'center',
      //   alignItems:'center'}}
      //   key={id} 
      //   onPress= { () => this.showModal(item)} >
      //   <Fontisto style={styles.closeButton} name="trash" onPress={() => this.updateBorradas(item)}/>
      //   <Image style={styles.image} source={{uri: img}}/>
      //   <View style={styles.nombres}>
      //   <Text style={styles.text}> {firstName} </Text>
      //   <Text style={styles.text}> {lastName} </Text>
      //   </View>
      //   <View style={styles.datos}>
      //     <Text style={styles.texto}> {Email} </Text>
      //     <Text style={styles.texto}> {Date} ({Birthday})</Text>
      //   </View>
      // </TouchableOpacity>
              
        // )
    return(
      <SafeAreaView style={{flex:1}}>
        <View style= {styles.top}>
          <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
              <Text><Entypo name="home" size={24} color="black" /> Menu</Text>
          </TouchableOpacity>
          {/* Buscador */}
          <TextInput style={styles.Buscador} placeholder="Buscar en contactos..." onChangeText={text => {this.setState({search: text}), this.filter(text), this.updateSearch.bind(this) }} value={search}  />
          <TouchableOpacity onPress={this.getData.bind(this)}>
            <Ionicons name="ios-reload-circle-sharp" size={24} color="black" style={styles.ResetIcon}/><Text> Resetear busqueda</Text>
          </TouchableOpacity>
        </View>
        <View style= {styles.topMed}>
            <TouchableOpacity onPress={this.az.bind(this)}>
                <Text > <MaterialCommunityIcons name="sort-alphabetical-ascending" size={24} color="black" />Orden Ascendente</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={this.za.bind(this)}>
                <Text> <MaterialCommunityIcons name="sort-alphabetical-descending" size={24} color="black" />Orden Descendente</Text>
            </TouchableOpacity>
        </View>
        <View style= {styles.topMed}>
          <TouchableOpacity onPress={this.borrarTarjetas}>
            <View ><Text> <AntDesign name="deleteusergroup" size={24} color="black" />Borrar tarjetas</Text></View>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Text onPress={this.borrarCompleto} style={styles.borrarCompleto}> <MaterialCommunityIcons name="close-box-multiple" size={21} color="black" />Cerrar tarjetas importadas</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>{/* {values} */}
        {
          
          <FlatList style={styles.flat}
          data={this.state.importedUsers}
          keyExtractor={ (item, idx) => idx.toString()}
          
          
          renderItem={ ({item}) =>
          (
            <TarjetaSelec
          id= {item.login.uuid}
          firstName={item.name.first}
          img={item.picture.large}
          lastName={item.name.last}
          Email={item.email}
          city={item.location.city}
          State={item.location.state}
          Street={item.location.street.name}
          StreetNumber={item.location.street.number}
          Telephone= {item.phone}
          imgMed={item.picture.medium}
          Country={item.location.country}
          Postcode={ item.location.postcode}
          Birthday= {item.dob.age/* .substring(0,10) */}
          Date= {item.dob.date/* .substring(0,10) */}
          Registered = {item.registered.date}
          >
          </TarjetaSelec>
            )
          }
          />
        }  
        <Modal visible={this.state.showModal}
                animationType="slide"
                transparent={true}
                >
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
                            this.state.itemModal.registered.date.substring(0,10)}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Telefono:</Text>{' '} {
                            this.state.itemModal.cell}</Text>
                            <Text style={styles.textModal}> <Text style={{fontWeight: "bold"}}>Comentario:{' '}{comentario}</Text>{' '}</Text>
                            <TextInput style={styles.Input} placeholder="Agregar Detalle" onChangeText={text => {this.setState({comentario: text})}}/>
                           <TouchableOpacity onPress={this.comentarioAAgregar}>
                              <View>
                                <Text style={styles.Input}>Agregar Comentario</Text>
                              </View>
                            </TouchableOpacity>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:false})}>X</Text>
                            </>
                            :<Text>Nothing to show.</Text>
                            }
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={this.getData.bind(this)}>
                  <View style={styles.botonInicial}><Text style={styles.textBoton}>Importar Datos</Text></View>
                </TouchableOpacity>
        </ScrollView>

      </SafeAreaView>
    )

  }
    
}

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

