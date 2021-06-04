import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator, Button, Modal, TouchableOpacity} from 'react-native';
import React, { Component} from "react"; 
import {getData} from "../api/RandomUser"

export class Screen_Flatlist extends Component {
  constructor() {
      super();
      this.state = {
          contactos: [],
          activity: true,
          showModal: false,
          itemModal: null
      }
  }
  
  
  keyExtractor= (item, idx) => idx.toString();

   cargarDatos() {
     this.setState({activity:true});
     this.getData();
   }

  componentDidMount() {
      getData()
      .then( results => {
        this.setState({contactos:results, activity:false});
      })
  }

  showModal(item) {
      this.setState({itemModal: item, showModal: !this.state.showModal})
  }

  renderItem = ({item})=> {
    return(
        <TouchableOpacity onPress= { () => this.showModal(item)}>
              <View style={styles.card}>
              <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
              <Text style={styles.text}> {item.name.first} </Text>
              <Text style={styles.text}> {item.name.last} </Text>
              </View>
          </TouchableOpacity>
    )
}

  render() {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Tus Contactos</Text>
                </View>
                <View style={styles.listContainer}>
                { this.state.activity
                ?<ActivityIndicator 
                color="purple" 
                size="large"/>
                :<FlatList
                        data={this.state.contactos}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                />
                }
                {/* <Button title="Mostrar Modal" onPress= { () => this.setState({showModal: !this.setState.showModal})}></Button>  */}
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
                </View>
                <View style={styles.header}>
                    <Text>David Bastidas, Pedro Presaras, Marcos Estrada</Text>
                </View>
            </View> 
        )
    }
};

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
        flex:1,
        backgroundColor:"blue"
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
    }
})

