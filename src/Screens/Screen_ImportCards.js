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
            <Text key={item.login.uuid} style={styles.text}>{item.name.first}, {item.name.last}</Text>
            )
      return (
        <View style={{flex:1}}>
            <View>
                <TouchableOpacity opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
                    <Text><Entypo name="home" size={24} color="black" /> Volver al Menu</Text>
                </TouchableOpacity>
                <Text>Importar Tarjetas</Text>
                <Text>Selecciona la cantidad de tarjetas que quieres importar</Text>
            </View>
            <ScrollView>
                {values}
                <TouchableOpacity onPress={this.storeData.bind(this)}>
                    <View><Text>Guardar Tarjetas</Text></View>
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
})