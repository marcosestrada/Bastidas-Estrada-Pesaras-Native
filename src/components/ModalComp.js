import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity, StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/Styles';





class ModalComp extends Component { 

    constructor() {
        super();
        this.state = {
            
            showModal: false,
            itemModal: null,
           
            comentario: []  
        }}


    render(){
const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;

       
        return(
<Modal visible={this.props.isOpenClose}>
          
<View style={styles.modal}>
                    <View style={styles.infoModal}>
                    <Image  source={{uri: img}} style={styles.imgCardModal}  />
                    <Text style={styles.TituloModal}>{firstName}, {lastName}</Text>
                    <Text style={styles.TextoModal} >Location: {city}, {State}, {Country}</Text>
                    <Text style={styles.TextoModal}>Birthdate:{Date} </Text>
                    <Text style={styles.TextoModal}>Current age: {Bithday}</Text>
                    <Text style={styles.TextoModal}>Telephone: {Telephone}</Text>
                    <Text style={styles.TextoModal}>Registered: {Registered}</Text>
                    <Text style={styles.TextoModal}>Comentario: {this.state.text}</Text>
                    <TextInput style={styles.textInput} onChangeText={value => this.setState({textHandler: value})}/>
                    <TouchableOpacity onPress={() => this.setState({text: this.state.textHandler})}>
                      <View>
                          <Text style={styles.mostrarTexto}>Mostrar texto</Text>
                      </View>
                    </TouchableOpacity>

                   </View>
                    <Pressable style={styles.infoModal}  onPress= {()=>this.props.closeModal.bind(this)} > 
                    
                    </Pressable>      
                  </View> 

</Modal>
   )}}

   export default ModalComp;