import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
    Text, 
    View, 
    StyleSheet,  
    Modal,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export class Screen_ImportCards extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            users:[],
            colorTarjeta: 'wheat'
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api?results=10")
        .then(response => response.json())
        .then(result => {
            this.setState({users:result.results})
        })
        Alert.alert("Aqui va a poder ver las tarjetas");
    }

    async storeData(){
        try{
            const jsonUsers = JSON.stringify(this.state.users);
            await AsyncStorage.setItem("Users", jsonUsers);
            Alert.alert("Tarjetas Importadas con Éxito!")
        } catch(e){
            console.log("Error: " + e)
        }
    }


    render() {

        const values = this.state.users.map(item =>
  
            <TouchableOpacity style={styles.tarjetas} key={item.login.uuid} onPress= { () => this.showModal(item)} >
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
                    <View style={styles.check}> 
                      <Text><Entypo name="check" size={24} color="white" /></Text>
                    </View>
                    <View style={styles.cross}> 
                      <Text style={styles.cruz}>x</Text>
                    </View>                   
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
                <View style={styles.info}>
                     <Text>Importar Tarjetas</Text>
                     <Text style={styles.selec}>Selecciona la cantidad de tarjetas que quieres importar</Text>
                </View>
            </View>
            <ScrollView style={styles.contenedor}>
                <View >
                {values}
                </View>
                <TouchableOpacity style={styles.guardar} onPress={this.storeData.bind(this)}>
                   <Text style={styles.cruz} >Importar Tarjetas</Text>
                </TouchableOpacity>
            </ScrollView> 
            
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
        margin: 5
    },
    selec:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    texto:{
        marginTop: 5
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
    }

})