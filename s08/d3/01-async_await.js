// const traerDatos = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Datos obtenidos")
//     })
// }

// promise se reemplaza por async
const traerDatos = async () => {
    // return equivale a resolve
    return "Datos obtenidos" 
    // throw equivale a reject
    throw "Error al obtener los datos" 
    }

const traerInfoUsuario = async () => {
    return "Info Usuario"
    // throw "Error al obtener info de usuario" 
}

const validarUsuario = async () => {
    // return "Usuario Validado"
    throw "Error al validar usuario" 

}

// traerDatos()
// .then((rpta) => {
//     console.log(rpta)
// })
// .catch((error) => {
//     console.log(error)
// })

// se reemplaza por await
// pedirDatos() retorna otra promesa
const pedirDatos = async () => {
    try {
        // await detiene el proceso en caso de error
        // si va bien, invoca al return (resolve)
        let rptaDatos = await traerDatos()
        console.log(rptaDatos)
        let rptaUsuario = await traerInfoUsuario()
        console.log(rptaUsuario)
        let rptaValidar = await validarUsuario()
        console.log(rptaValidar)
    // .catch en caso de error, invoca al throw (reject)    
    } catch (error) {
        console.log(error)
    }
}
pedirDatos()
