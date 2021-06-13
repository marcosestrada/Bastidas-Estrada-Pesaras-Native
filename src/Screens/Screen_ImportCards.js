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
    ScrollView
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
export class Screen_ImportCards extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            users:[]
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api?results=30")
        .then(response => response.json())
        .then(result => {
            this.setState({users:result.results})
        })
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
            <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
            <Text style={styles.text}> {item.name.first} </Text>
            <Text style={styles.text}> {item.name.last} </Text>
            <Text style={styles.text}> {item.email} </Text>
            <Text style={styles.text}> {item.dob.date} ({item.dob.age})</Text>
            <Text style={styles.seleccionar}>Seleccionar Tarjeta</Text>
          </TouchableOpacity>
            )
      return (
        <View style={{flex:1}} style={styles.modalPadre}>
            <View>
                <TouchableOpacity opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
                    <Text><Entypo name="home" size={24} color="black" /> Volver al Menu</Text>
                </TouchableOpacity>
                <Text>Importar Tarjetas</Text>
                <Text>Selecciona la cantidad de tarjetas que quieres importar</Text>
            </View>
            <ScrollView>
                <View >
                {values}
                </View>
                <TouchableOpacity onPress={this.storeData.bind(this)}>
                    <View><Text style={styles.guardar}>Guardar Tarjetas</Text></View>
                </TouchableOpacity>
            </ScrollView> 
        </View>
      )
    }
}
const styles = StyleSheet.create({ 
    text: {
        fontSize: 20
    },
    modalPadre:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      tarjetas: {
        margin: 5,
        backgroundColor: 'lightblue',
        borderRadius: 20
      },
      guardar:{
        fontSize: 15,
        backgroundColor: 'red',
        width: 350,
        height: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      image: {
        width: 50,
        height: 50,
    },
    seleccionar:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
})