import React, { Component} from "react"; 
import { 
    Text, 
    View, 
    Modal,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styles } from '../styles/Styles'

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
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.setState({showModal: !this.state.showModal})}>
                    <View style={styles.caja}>
                        <Text style={styles.letra}>Acerca de ...</Text>
                        <Entypo name="info" style={styles.iconFooter} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity opacity={0.8} style={styles.caja} onPress={() => this.props.navigation.navigate("Screen_DeletedCards")}>
                    <Text style={styles.letra}>Papelera de reciclaje</Text>
                    <Fontisto style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
            </View>
            
            <Modal  visible={this.state.showModal}
                    animationType="slide"
                    transparent={true}>
                    
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Text style={styles.textModal}> Nuestro equipo esta formado por: </Text>
                            <Text style={styles.textAuthor}> {'\n'}-David Bastidas- {'\n'}-Marcos Estrada- {'\n'}-Pedro Presaras-</Text>
                            <Text style={styles.closeButton} onPress={() => this.setState({showModal:!this.state.showModal})}> X </Text>
                        </View>
                    </View>
            </Modal>
        </View>
      )
    }
}
