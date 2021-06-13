export async function getData() {
    try{
        const resultado = await AsyncStorage.getItem("Users");
        this.setState({importedUsers: JSON.parse(resultado)});
        return resultado;
    } catch(e){
        console.log("Error: " + e)
    }
  
}