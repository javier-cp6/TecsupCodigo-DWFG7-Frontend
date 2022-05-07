import axios from "axios"

const URL = "https://62731e366b04786a09017eb6.mockapi.io/"

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

