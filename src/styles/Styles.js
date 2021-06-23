import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    bigPoppa:{
      justifyContent: 'center',
   
    },
    contenedorBoton:{
      width: '100%',
      alignItems: 'center'
    },
  
    tituloDelete:{
        fontSize: 20,
        marginRight: 10
    },
    contenedorTitulo:{
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    top:{
      backgroundColor: 'wheat',
      borderRadius: 20,
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
    },
    closeButton:{
        fontSize: 30,
        position: "absolute",
        right: 20,
        top:10,      
    },
    textModal: {
        fontSize: 20,
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
        backgroundColor: "wheat",
        borderRadius: 20,
        shadowColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "grey",
        elevation: 10
    },
    menu: {
      borderRightWidth: 3,
      borderRightColor: 'black',
      marginBottom: 10,
      marginTop: 10,
      paddingRight: 20,
      height: 35
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
    borrarCompleto:{
      marginLeft: 30,
      backgroundColor: '#EDBB99',
      width: 255
    },
    tarjetas: {
      margin: 5,
      backgroundColor: 'wheat',
      borderRadius: 20,
      width: 300,
    },
    botonInicial: {
      width: 150,
      height:50,
      backgroundColor:"#EDBB99",
      borderRadius:40,
      justifyContent: 'center',
      marginTop: 10
    },
    textBoton:{
      width: 300,
      marginLeft: 3,
      marginRight: 3
      
    },
    botonBorrarSelec:{
      marginLeft: 150,
      marginTop: 150,
      width:105,
      height:40,
      backgroundColor:"#EDBB99",
      borderRadius:40
    },
  
    
  //CSS COPIADO DE VIEWIMPORTEDCARDS  
  nombres:{
    flexDirection: "row",
  },
  top:{
    backgroundColor: 'wheat',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  topMed:{
    backgroundColor: 'wheat',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  Buscador:{
    marginLeft: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: 200
  },
  closeButton:{
      fontSize: 30,
      position: "absolute",
      right: 20,
      top:10, 
      color: 'red',     
  },
  textModal: {
      fontSize: 20,
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
      backgroundColor: "wheat",
      borderRadius: 20,
      shadowColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "grey",
      elevation: 10
  },
  menu: {
    borderRightWidth: 3,
    borderRightColor: 'black',
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
    height: 35
  },
  text: {
      fontSize: 20
  },
  separator:{
      borderBottomColor: "black",
      borderBottomWidth: 1
  },
  image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'black',
      margin: 5
  },
  footer:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
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
},
caja:{
    flex:1,
    backgroundColor: "wheat",
    padding: "10%",
    margin: 5
},
letra:{
    fontSize: 20,
    marginTop: 20,
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
nombres:{
    flexDirection: "row",
  },
  top:{
    backgroundColor: 'wheat',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  topMed:{
    backgroundColor: 'wheat',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  Buscador:{
    marginLeft: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: 200
  },
  closeButton:{
      fontSize: 30,
      position: "absolute",
      right: 20,
      top:10, 
      color: 'red',     
  },
  textModal: {
      fontSize: 20,
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
      backgroundColor: "wheat",
      borderRadius: 20,
      shadowColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "grey",
      elevation: 10
  },
  menu: {
    borderRightWidth: 1,
    borderRightColor: 'black',
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 5,
    height: 35
  },
  text: {
      fontSize: 20
  },
  separator:{
      borderBottomColor: "black",
      borderBottomWidth: 1
  },
  image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'black',
      margin: 5
  },
  footer:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
  borrarCompleto:{
    marginLeft: 3,
    
  },
/*   tarjetas: {
    backgroundColor: 'wheat',
    margin: 5,
    borderRadius: 20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }, */
  botonInicial: {
    marginLeft: 150,
    marginTop: 20,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  },
  textBoton:{
    marginLeft:4,
    marginTop: 8
  },
  botonBorrarSelec:{
    marginLeft: 150,
    marginTop: 150,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  },
  ResetIcon:{
    marginLeft: 60
  },
  Input:{
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 300,
    marginLeft: 20
  },
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
},
nombres:{
    flexDirection: "row",
  },
  top:{
    backgroundColor: 'wheat',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  topMed:{
    backgroundColor: 'wheat',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  Buscador:{
    marginLeft: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: 200
  },
  closeButton:{
      fontSize: 30,
      position: "absolute",
      right: 20,
      top:10, 
      color: 'red',     
  },
  textModal: {
      fontSize: 20,
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
      backgroundColor: "wheat",
      borderRadius: 20,
      shadowColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "grey",
      elevation: 10
  },
  menu: {
    borderRightWidth: 1,
    borderRightColor: 'black',
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 5,
    height: 35
  },
  text: {
      fontSize: 20
  },
  separator:{
      borderBottomColor: "black",
      borderBottomWidth: 1
  },
  image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'black',
      margin: 5
  },
  footer:{
      height: '10%',
      width: '100%',
      backgroundColor:"blue",
      justifyContent:'center',
      alignItems: 'center'
  },
  borrarCompleto:{
    marginLeft: 3,
    
  },
/*   tarjetas: {
    backgroundColor: 'wheat',
    margin: 5,
    borderRadius: 20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }, */
  botonInicial: {
    marginLeft: 150,
    marginTop: 20,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  },
  textBoton:{
    marginLeft:4,
    marginTop: 8
  },
  botonBorrarSelec:{
    marginLeft: 150,
    marginTop: 150,
    width:105,
    height:40,
    backgroundColor:"#EDBB99",
    borderRadius:40
  },
  ResetIcon:{
    marginLeft: 60
  },
  Input:{
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 300,
    marginLeft: 20
  }


  });

  export {styles}
  