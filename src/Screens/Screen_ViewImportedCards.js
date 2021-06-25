import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  Text, 
  View, 
  TextInput,
  TouchableOpacity, 
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import TarjetaSelec from "../components/TarjetaSelec";
import { styles } from '../styles/Styles'


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

// Borrar memoria del Storage
/*   
 async componentDidMount (){
    await AsyncStorage.removeItem('Users')
  } */

  async getData() {
    try{
        let resultado = await AsyncStorage.getItem("Users");
        resultado = JSON.parse(resultado)
        console.log(resultado)
        if (resultado == null) {
           Alert.alert("No hay usuarios importados")
        }else {
            this.setState({importedUsers: resultado});
          }
        return resultado;
    } catch(e){
        console.log("Error: " + e)
    }
  }


// Botones para ordenar ascendente y descendente
  az = () => {
    this.state.importedUsers.sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.setState({importedUsers: this.state.importedUsers.sort(function(a, b) { return a.name.first > b.name.first})})
    console.log('sejecuta')
  } 
  za = () => {
    this.state.importedUsers.sort((a, b) => b.name.first.localeCompare(a.name.first))
    this.setState({importedUsers: this.state.importedUsers.sort(function(a, b) { return a.name.first < b.name.first})})
  }

// Filtro para buscar por nombre, apellido y edad
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

// Ocultar tarjetas importadas
  borrarCompleto = ()=> {
    this.setState({importedUsers: []})
  }

//Borrar tarjetas importadas y mandarlas a papelera de reciclaje
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

// Agregar comentarios a las tarjetas
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

// Tarjetas borradas desaparezcan del screen ViewImported
updateBorradas(item){
  let aBorrar = this.state.usuariosABorrar
  aBorrar.push(item)
  this.setState({usuariosABorrar:aBorrar})
  this.setState({color: '#e8665d'})
}



render(){
   const { search } = this.state;
   const { img, firstName, lastName,Email,city,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;

  return(
    <SafeAreaView style={{flex:1}}>
      <View style= {styles.top}>
        <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
          <Text><Entypo name="home" size={24} color="black" /> Menu</Text>
        </TouchableOpacity>
        <TextInput style={styles.Buscador} placeholder="Buscar en contactos..." onChangeText={text => {this.setState({search: text}), this.filter(text)}} value={search}  />
        <TouchableOpacity onPress={this.getData.bind(this)}>
          <Ionicons name="ios-reload-circle-sharp" size={24} color="black" style={styles.ResetIcon}/>
            <Text> Resetear busqueda</Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.topMed}>
        <TouchableOpacity onPress={this.az.bind(this)}>
          <Text ><MaterialCommunityIcons name="sort-alphabetical-ascending" size={24} color="black" />Orden Ascendente</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={this.za.bind(this)}>
          <Text><MaterialCommunityIcons name="sort-alphabetical-descending" size={24} color="black" />Orden Descendente</Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.topMed}>
        <TouchableOpacity onPress={this.borrarTarjetas}>
          <View>
            <Text><AntDesign name="deleteusergroup" size={24} color="black" />Borrar tarjetas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={this.borrarCompleto} style={styles.borrarCompleto}><MaterialCommunityIcons name="close-box-multiple" size={21} color="black" />Cerrar tarjetas importadas</Text>
        </TouchableOpacity>
      </View>

      <FlatList style={styles.flat}
        data={this.state.importedUsers}
        keyExtractor={ (item, idx) => idx.toString()} /* id unico para cada tarjeta */
        renderItem={ ({item}) => /* A traves del renderItem es como vemos las tarjetas */
        (
        <TarjetaSelec
          updateBorradas = {this.updateBorradas.bind(this, item)} 
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
        > </TarjetaSelec>
        )
        }
      />
        <TouchableOpacity onPress={this.getData.bind(this)}>
          <View style={styles.botonInicial}>
            <Text style={styles.textBoton}>Importar Datos</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}  
}


