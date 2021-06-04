export async function getData() {
    try{
        const resultado = await fetch("https://deelay.me/2000/randomuser.me/api/?results=8")
        const json = await resultado.json();
        return json.results;
    } catch(e){
        console.log("Error: " + e)
    }
    
}