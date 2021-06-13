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
  ScrollView
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export class Screen_ViewImportedCards extends Component {
  constructor() {
      super();
      this.state = {
          importedUsers: [],
          showModal: false,
          itemModal: null
      }
  }

  showModal(item) {
    this.setState({itemModal: item, showModal: !this.state.showModal})
  }
  
  async getData() {
    try{
        const resultado = await AsyncStorage.getItem("Users");
        this.setState({importedUsers: JSON.parse(resultado)});
        return resultado;
    } catch(e){
        console.log("Error: " + e)
    }
  }

  render(){
    const values = this.state.importedUsers.map(item =>
            
      <TouchableOpacity key={item.login.uuid} onPress= { () => this.showModal(item)}>
        <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
        <Text style={styles.text}> {item.name.first} </Text>
        <Text style={styles.text}> {item.name.last} </Text>
        <Text style={styles.text}> {item.email} </Text>
        <Text style={styles.text}> {item.dob.date} ({item.dob.age})</Text>
      </TouchableOpacity>
              
        )
    return(
      <View>
        <TouchableOpacity opacity={0.8} onPress={() => this.props.navigation.navigate("Screen_Menu")}>
          <Text><Entypo name="home" size={24} color="black" /> Volver al Menu</Text>
        </TouchableOpacity>
        <View><Text> Tarjetas Importadas</Text></View>
        <ScrollView>{values}
        <Modal visible={this.state.showModal}
                animationType="slide"
                transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            { this.state.itemModal
                            ?
                            <>
                            <Image style={{width: 100, height:100}} source={{uri: this.state.itemModal.picture.thumbnail}}/>
                            <Text style={styles.textModal}>{
                            this.state.itemModal.name.first}</Text>
                            <Text style={styles.textModal}>{
                            this.state.itemModal.name.last}</Text>
                            <Text style={styles.textModal}>{
                            this.state.itemModal.dob.age}</Text>
                            <Text style={styles.textModal}>{
                            this.state.itemModal.address}</Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:false})}>X</Text>
                            </>
                            :<Text>Nothing to show.</Text>
                            }
                        </View>
                    </View>
                </Modal>
        </ScrollView>
        <TouchableOpacity onPress={this.getData.bind(this)}>
        <View><Text>Importar Datos</Text></View>
        </TouchableOpacity>
      </View>
    )

  }
    
}

const styles = StyleSheet.create({
  closeButton:{
      fontSize: 20,
      position: "absolute",
      right: 20,
      top:10
  },
  textModal: {
      fontSize: 20
  },
  listContainer: {
      flex: 1,
  },
  modalContainer: {       
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)"
  },
  modal: {
      padding: 20,
      width: "100%",
      height: "70%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "white",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      shadowColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "grey",
      elevation:10
  },
  header:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
  container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center"
  },
  menu:{
      height:200,
      backgroundColor: "lime"
  },
  card:{
      margin: 5,
      padding:5,
      width: 200,
      height: 120,
      borderBottomColor: "black",
      borderBottomWidth: 2,
      flex: 1,
      alignItems: "center"
  },
  text: {
      fontSize: 20
  },
  separator:{
      borderBottomColor: "black",
      borderBottomWidth: 1
  },
  image: {
      width: 50,
      height: 50
  },
  footer:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
  
})

