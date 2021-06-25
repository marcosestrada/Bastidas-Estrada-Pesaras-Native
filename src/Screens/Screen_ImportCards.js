import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
    Text, 
    View, 
    TouchableOpacity,
    Alert,
    ScrollView,
    ActivityIndicator,
    TextInput,
    FlatList
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import TarjetaInit from "../components/TarjetaInit";
import { styles } from '../styles/Styles'

export class Screen_ImportCards extends Component {
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

// Input donde se especifica cuantas queres tarjetas queres visualizar (Se llama a la api + las que el usuario pone en el input)
addContact(){
    fetch("https://randomuser.me/api?results="+ this.state.cantidadagregada)
    .then(response => response.json())
    .then(result => {
        this.setState({users:result.results, activity:false})
        this.setState({visibilidad:'none'})
        this.setState({display:'flex'})
        this.setState({titulo:'Tarjetas importadas'})        
    })
}

// Funcion ASYNC para guardar los datos dentro del array Users
async storeData(){
    try{
        //await AsyncStorage.removeItem('Users')
        console.log(this.state.usuariosAImport)
        let storage =  await AsyncStorage.getItem("Users");
        storage = JSON.parse(storage)
        const seleccionados = "Se importaron las " + this.state.usuariosAImport.length + " tarjetas seleccionadas"
        if (storage == null) storage = []
        this.state.usuariosAImport.map(usuario => {
            storage.push(usuario)
        })
        console.log(storage)
        const jsonUsers = JSON.stringify(storage);
        await AsyncStorage.setItem("Users", jsonUsers);
        Alert.alert(seleccionados)
    }catch(e){
        console.log("Error: " + e)
    }
}

updateImports(item){
    let aImportar = this.state.usuariosAImport
    aImportar.push(item)
    console.log(aImportar)
    this.setState({usuariosAImport:aImportar})
}
    
    /*  CambiarColor=(nuevoColor)=>{

        this.setState({colorTarjeta: nuevoColor});
        console.log('queriendo cambiar colors');
        console.log(this.state.colorTarjeta);
     } */
    
// Funcion que sirve para que una vez que importas la cantidad de tarjetas deseadas se vayan de la screen ImportCards
removeItem(item){
    let aBorrar = this.state.usuariosAImport
    aBorrar.splice(2, 1)
    this.setState({usuariosAImport:aBorrar})
}

render() {
    return (
        <View style={{flex:1}} >
            <View style= {styles.top}>
                <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
                    <Text><Entypo name="home" size={24} color="black"/> Menu</Text>
                </TouchableOpacity>
                <View style={styles.info} >
                     <Text style={styles.selec}>{this.state.titulo}</Text>
                     <View style={{display: this.state.visibilidad, flexDirection:'row', justifyContent: 'flex-start'}}>
                        <TextInput  multiline={true}
                        numberOfLines = {1}
                        style={{borderWidth: 2, borderStyle:'solid', width: 100}} 
                        onChangeText = {text => this.setState({cantidadagregada: text}) }/>
                    <TouchableOpacity style={styles.agregarBoton} onPress= {() => this.addContact()}>
                        <Text>Agregar</Text>
                    </TouchableOpacity> 
                </View>      
                </View>
            </View>
            {this.state.activity
            ?
            <ActivityIndicator style={styles.loader}
              color="#EDBB99" 
              size="large"
            />
            :
            <ScrollView style={styles.contenedor}>
                <FlatList style={styles.flat}
                data={this.state.users}
                keyExtractor={ (item, idx) => idx.toString()}
                renderItem={ ({item}) =>
                (
                <TarjetaInit
                 onSelect = {this.updateImports.bind(this)}
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
                 data = {item}
                >
                </TarjetaInit>   
                )
                }
                />
                
                <View style={{display: this.state.display}}>
                    <Text style={styles.selec}>Cambiar la cantidad de tarjetas que quieres visualizar</Text>
                        <View style={styles.compAgregarTarjetas}>
                            <TextInput  multiline={true}
                             numberOfLines = {1}
                             style={{borderWidth: 2, borderStyle:'solid', width: 100}} 
                             onChangeText = {text => this.setState({cantidadagregada: text}) }/>
                            <TouchableOpacity style={styles.agregarBoton} onPress= {() => this.addContact()}>
                                <Text>Cambiar</Text>
                            </TouchableOpacity> 
                        </View>
                </View>
                    <View style={{display: this.state.visibilidad}}>
                        <Text>No hay tarjetas importadas</Text>
                    </View>
                    <TouchableOpacity style={styles.guardar} onPress={() => this.storeData()}>
                        <Text style={styles.cruz}>Importar Tarjetas</Text>
                    </TouchableOpacity>
            </ScrollView> 
            }
        </View>
    )
}}

