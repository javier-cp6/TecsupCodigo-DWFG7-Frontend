// peticiones - axios
import axios from "axios"

const URL = "https://62731e366b04786a09017eb6.mockapi.io/categorias"
/*
const obtenerCategorias = () => {
    return new Promise ((resolve, reject) => {
        axios.get(URL)
        .then((rpta) => {
            console.log(rpta)
        })
        .catch((error) => {
            console.log(error)
        }) 
    })
}

export {
    obtenerCategorias
}
*/

// agregar {data, status}
const obtenerCategorias = () => {
    return new Promise ((resolve, reject) => {
        axios.get(URL)
        .then(({data, status}) => {
            // validar status ok
            if(status === 200) {
                resolve(data)
            }else{
                reject("Error al obtener data")
            }
        })
        .catch((error) => {
            console.log(error)
        }) 
    })
}

const crearCategoria = async (nuevaCategoria) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        //.post(url, data, {headers}). Revisar documentación de axios
        const {data, status} = await axios.post(URL, nuevaCategoria, {headers})
        if(status === 201) {
            return data
        } else {
            throw "Error al obtener data"
        }
    } catch (error) {
        throw error
    }
}

export {
    obtenerCategorias,
    crearCategoria
}
