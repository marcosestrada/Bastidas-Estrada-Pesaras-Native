import React, { Component} from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
    Text, 
    View, 
    StyleSheet,  
    Modal,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export class Screen_Menu extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }


    render() {

      return (
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.props.navigation.navigate("Screen_ImportCards")}>
                    <Text style={styles.letra}>Importar tarjetas</Text> 
                    <AntDesign style={styles.iconStyle} name="download" />
                </TouchableOpacity>
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.props.navigation.navigate("Screen_ViewImportedCards")}>
                    <Text style={styles.letra}>Ver Tarjetas Importadas</Text>
                    <FontAwesome5 style={styles.iconStyle} name="address-card" />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.props.navigation.navigate("Screen_ModifyCards")}>
                    <Text style={styles.letra}>Modificar tarjetas</Text>
                    <FontAwesome5 style={styles.iconStyle} name="user-edit"/>
                </TouchableOpacity>
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.props.navigation.navigate("Screen_DeletedCards")}>
                    <Text style={styles.letra}>Papelera de reciclaje</Text>
                    <Fontisto style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
            </View>

                <Modal visible={this.state.showModal}
                    animationType="slide"
                    transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            
                            <Text style={styles.textModal}> Nuestro equipo esta formado por:</Text>
                            <Text style={styles.textAuthor}> {'\n'}-David Bastidas- {'\n'}-Marcos Estrada- {'\n'}-Pedro Presaras-</Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:!this.state.showModal})}>X</Text>
                        
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity opacity={0.8} style={{flex: 1, flexDirection: 'row'}} onPress={() => this.setState({showModal: !this.state.showModal})}>
                    <View style={styles.caja}><Text style={styles.letraFooter}>Acerca de ...</Text>
                        <Entypo name="info" style={styles.iconFooter} />
                    </View>
                </TouchableOpacity>
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
        fontSize: 28,
        position: "absolute",
        right: 20,
        top:10
    },
    textModal: {
        fontSize: 40,
        paddingTop:70,
        paddingLeft:50
    },
    textAuthor: {
        fontSize: 25,
        paddingTop:40,
        paddingLeft:90
    },
    iconStyle: {
        fontSize: 30,
        marginLeft:"30%",
        marginTop:15
    },
    iconFooter:{
        fontSize: 30,
        marginLeft:"45%",
        marginTop:15
    },
});