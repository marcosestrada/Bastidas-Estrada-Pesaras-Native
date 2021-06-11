import React, { Component} from "react"; 
import { 
    Text, 
    View, 
    StyleSheet,  
    Modal,
} from 'react-native';

import { FontAwesomeIcon } from 'react-native-fontawesome';


export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        }
    }


    render() {
      return (
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={styles.caja}>
                    <Text style={styles.letra}>Importar tarjetas</Text> 
                    <FontAwesomeIcon style={styles.iconStyle} icon="fa-solid fa-down-to-line" />
                </View>
                <View style={styles.caja}>
                    <Text style={styles.letra}>Ver Tarjetas Importadas</Text>
                    <FontAwesomeIcon style={styles.iconStyle} icon="fa-solid fa-address-card" />               
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.caja}>
                    <Text style={styles.letra}>Modificar tarjetas</Text>
                    <FontAwesomeIcon style={styles.iconStyle} icon="fa-solid fa-user-pen" />
                </View>
                <View style={styles.caja}>
                    <Text style={styles.letra}>Papelera de reciclaje</Text>
                    <FontAwesomeIcon style={styles.iconStyle} icon="fa-solid fa-trash" />
                </View>
            </View>

                <Modal visible={this.state.showModal}
                    animationType="slide"
                    transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            
                            <Text style={styles.textModal}>David Bastidas, Marcos Estrada, Pedro Presaras</Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:!this.state.showModal})}>X</Text>
                        
                        </View>
                    </View>
                </Modal>

                <View style={{flex: 1, flexDirection: 'row'}} onPress={() => this.setState({showModal: !this.state.showModal})}>
                    <View style={styles.caja}><Text style={styles.letraFooter}>Acerca de ...</Text></View>
                </View>
        </View>
      )
    }
}
  
const styles = StyleSheet.create({
    caja:{
        flex:1,
        backgroundColor: "wheat",
        padding: "10%",
        margin: 5
    },
    letra:{
        fontSize: 20,
        marginTop: 50,
        justifyContent: "center"
    },
    letraFooter: {
        fontSize: 20,
        marginLeft: 100,
        marginTop: 50
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
    closeButton:{
        fontSize: 20,
        position: "absolute",
        right: 20,
        top:10
    },
    textModal: {
        fontSize: 20
    },
    iconStyle: {
        fontSize: 15
    }
});