import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
    Text, 
    View, 
    StyleSheet,  
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

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
            visibilidad: '',
            display: 'none',
            titulo: 'Selecciona la cantidad de tarjetas que quieres importar'
            
        }
    }

    // componentDidMount(){
    //     fetch("https://randomuser.me/api?results="+ this.state.cantidadagregada)
    //     .then(response => response.json())
    //     .then(result => {
    //         this.setState({users:result.results, activity:false})
    //     })
    // }

    addContact(){
        fetch("https://randomuser.me/api?results="+ this.state.cantidadagregada)
        .then(response => response.json())
        .then(result => {
            this.setState({users:result.results, activity:false})
            this.setState({visibilidad:'none'})
            this.setState({display:''})
            this.setState({titulo:'Tarjetas importadas'})
        
        })
    }

    async storeData(){
        try{
            let storage =  await AsyncStorage.getItem("Users");
            storage = JSON.parse(storage)
            const seleccionados = "Se importaron las " + this.state.usuariosAImport.length + " tarjetas seleccionadas"
            if (storage == null) storage = []
            this.state.usuariosAImport.map(usuario => {
                storage.push(usuario)
            })
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
        this.setState({usuariosAImport:aImportar})
    }

 
    removeItem(usuariosAImport){
        // let aBorrar = this.state.usuariosAImport
        // aBorrar.splice(item)
        // this.setState({usuariosAImport:aBorrar})
        let aBorrar = usuariosAImport.filter(function(item){
            return item
        })
        }

    render() {

        const values = this.state.users.map(item =>
  
            <TouchableOpacity style={styles.tarjetas} key={item.login.uuid}>
                <View style={styles.contenedorFoto}>
                  <Image style={styles.image} source={{uri: item.picture.large}}/>
                </View>
                <View style={styles.contenedorInfo}>
                <View style={styles.nombre}>
                    <Text style={styles.text}> {item.name.first} </Text>
                    <Text style={styles.text}> {item.name.last} </Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.texto}> {item.email} </Text>
                    <Text style={styles.texto}> {item.dob.date} ({item.dob.age})</Text>
                </View>
                <View style ={styles.acciones}>
                    <TouchableOpacity style={styles.check} onPress= {() => this.updateImports(item)}> 
                      <Text><Entypo name="check" size={24} color="white" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cross} onPress= {() => this.removeItem(item)}> 
                      <Text style={styles.cruz}>x</Text>
                    </TouchableOpacity>                   
                     {/* <Text style={styles.seleccionar}>Seleccionar Tarjeta</Text>
                    <Text style={styles.deseleccionar}>Anular Seleccion</Text> */}
                </View>
               </View>
          </TouchableOpacity>
        
            )
      return (
        <View style={{flex:1}} >
            <View style= {styles.top}>
                <TouchableOpacity style= {styles.menu} opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
                    <Text><Entypo name="home" size={24} color="black" /> Menu</Text>
                </TouchableOpacity>
                <View style={styles.info} >
                     <Text style={styles.selec}>{this.state.titulo}</Text>
                     <View style={{display: this.state.visibilidad, flexDirection:'row', justifyContent: 'flex-start'}}>
                        <TextInput  multiline={true}
                            numberOfLines = {1}
                            style={{borderWidth: 2, borderStyle:'solid', width: 100}} 
                            onChangeText = {text => this.setState({cantidadagregada: text}) }/>
                        <TouchableOpacity style={styles.agregarBoton} onPress= {() => this.addContact()}><Text>Agregar</Text></TouchableOpacity> 
                </View>      
            </View>
            </View>
            { this.state.activity
                ?<ActivityIndicator style={styles.loader}
                color="#EDBB99" 
                size="large"
                />
                :<ScrollView style={styles.contenedor}>
                    <View>
                        {values}
                    </View>
                    <View style={{display: this.state.display}}>
                     <Text style={styles.selec}>Cambiar la cantidad de tarjetas que quieres visualizar</Text>
                        <View style={styles.compAgregarTarjetas}>
                            <TextInput  multiline={true}
                                numberOfLines = {1}
                                style={{borderWidth: 2, borderStyle:'solid', width: 100}} 
                                onChangeText = {text => this.setState({cantidadagregada: text}) }/>
                            <TouchableOpacity style={styles.agregarBoton} onPress= {() => this.addContact()}><Text>Cambiar</Text></TouchableOpacity> 
                        </View>
                     </View>
                     <View style={{display: this.state.visibilidad}}>
                         <Text>No hay tarjetas importadas</Text>
                     </View>
                    <TouchableOpacity style={styles.guardar} onPress={this.storeData.bind(this)}>
                    <Text style={styles.cruz} >Importar Tarjetas</Text>
                    </TouchableOpacity>
                </ScrollView> 
            }
            
        </View>
      )
    }}


const styles = StyleSheet.create({ 
    top:{
        backgroundColor: 'wheat',
        borderRadius: 20,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    menu: {
        borderRightWidth: 1,
        borderRightColor: 'black',
        marginBottom: 10,
        marginTop: 10,
        paddingRight: 5,
    },
    info:{

        flex: 1,
        margin: 5,
     
    },
    selec:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20
    },
    texto:{
        marginTop: 5
    },
    agregarTarjetas:{
        width: '100%',
        height: '10%',
        backgroundColor: 'wheat',
        justifyContent: 'space-evenly'
    },
 
    agregarBoton:{
        backgroundColor: '#4287f5',
        borderRadius: 20,
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 70,

    },
    modalPadre:{ 
        backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    header:{
        height: '10%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    tarjetas: {
        margin: 5,
        backgroundColor: 'wheat',
        borderRadius: 20,
        
    },
    contenedorFoto:{
        justifyContent: "center",
        alignItems: 'center',
        borderRightWidth:1,
        borderRightColor: 'black',
        marginTop: 10,
        marginBottom: 10,
        paddingRight: 5
      },
    contenedorInfo:{
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center'
      },
    nombre:{
        flexDirection:'row'
      },
    guardar:{
        fontSize: 15,
        backgroundColor: '#4287f5',
        width: '90%',
        borderRadius:20,
        height: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginBottom: 2
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        margin: 3
    },
    acciones:{
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 25,
        backgroundColor: '#4287f5',
        borderRadius: 20,
        margin: 5
    },
    cross:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 40,
        height: 25,
        backgroundColor: '#f24150',
        borderRadius: 20,
        margin: 5
    },
    cruz:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    loader:{
        marginTop: 180,
    }

})