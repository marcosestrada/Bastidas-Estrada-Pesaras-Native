import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  FlatList, 
  Text, 
  View,  
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
              Bithday={Bithday }
              Registered={Registered} 
              Date={Date}
              id={id} 
              data = {item}
            >
            </TarjetaBorrar>
            )
            }
          />

        <View style={{flexDirection:'row', width:'100%', justifyContent: 'space-evenly',marginBottom:70, marginTop: 10 }}>
          <TouchableOpacity style={styles.botonesLimpiar} onPress={this.borrarDefinitiva.bind(this)} >
            <Text style={styles.textBotonBorrar}>Limpiar papelera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonesVer} onPress={this.getData.bind(this)}>
            <Text style={styles.textBotonBorrar}>Ver Tarjetas Borradas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonesRecuperar} onPress={this.recuperarTarjeta.bind(this)}>
            <Text style={styles.textBotonBorrar}>Recuperar Tarjetas Seleccionadas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

     
    </View>
    )
} 
}
