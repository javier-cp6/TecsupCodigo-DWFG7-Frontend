import axios from "axios"

// const URL = "https://62731e366b04786a09017eb6.mockapi.io/"
// process.env hace referencia a las variables de entorno para después indicar qué variable se desea obtener (process.env.nombreVariableDeEntorno)
const URL = process.env.REACT_APP_API
// console.log(process.env.REACT_APP_API)

const crearLugar = async(nuevoLugar) => {
    try {
        const headers = {
            "Content-type": "application/json"
        }
        // .post(URL, datos, {header})
        const endpoint = `${URL}/categorias/${nuevoLugar.categoriaId}/lugares`
        // console.log(endpoint)
        // console.log({endpoint})
        const { data, status } = await axios.post(endpoint, nuevoLugar, {headers})
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

const obtenerLugarPorId = async(idCat, idLugar) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { data, status } = await axios.get(endpoint)
        if(status === 200){
            return data
        }else{
            throw Error("Error al obtener el lugar")
        } 
    } catch (error) {
        throw error
    }
}

const editarLugar = async(idCat, idLugar, lugarEditado) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { data, status } = await axios.put(endpoint, lugarEditado, { headers})
        // console.log(status)
        if(status === 200){
            return data
        }else{
            throw Error("Error al editar el lugar")
        } 
    } catch (error) {
        throw error
    }
}

const eliminarLugar = async (idCat, idLugar) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { status } = await axios.delete(endpoint)
        // console.log(status)
        if(status === 200){
            return "ok"
        }else{
            return Error("Error al eliminar lugar")
        }
    } catch (error) {
        return error
    }
}

export {
    crearLugar,
    obtenerLugarPorId,
    editarLugar,
    eliminarLugar
}

