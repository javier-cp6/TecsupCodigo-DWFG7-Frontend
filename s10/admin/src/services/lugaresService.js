import axios from "axios"

// const URL = "https://62731e366b04786a09017eb6.mockapi.io/"
// process.env hace referencia a las variables de entorno para después ndicar qué variable se desea obtener (process.env.nombreVariableDeEntorno)
const URL = process.env.REACT_APP_API
console.log(process.env.REACT_APP_API)


const crearLugar = async(nuevoLugar) => {
    try {
        const headers = {
            "Content-type": "application/json"
        }
        // .post(URL, datos, {header})
        const endpoint = `${URL}/categorias/${nuevoLugar.categoriaId}/lugares`
        console.log({endpoint})
        const { data, status} = await axios.post(endpoint, nuevoLugar, {headers})
        if(status === 201) {
            return data
        }else{
            // Error() es una manera de enviar un error nativo de JS
            throw Error("Errror al crear")
        }
    } catch (error){
        throw error
    }
}
export {
    crearLugar
}

