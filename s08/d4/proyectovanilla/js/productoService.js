// se encarga de hacer peticiones, obtener los datos y hacer operaciones con ellos

const URL = "https://6264978ca55d5055be49c4d2.mockapi.io/productos"


// GET Request 

/*
// productos: 417ms
// 1. con promesas
const getProducts = () => {
    //la tarea dentro de la promesa se va a resolver/terminar en algún punto en el futuro
    return new Promise((resolve, reject) => {
        //fetch de forma simple hará un GET y solo necesita la URL
        fetch(URL)
        .then((rpta) => {
            // console.log(rpta)
            return rpta.json() //una nueva promesa, para brindarme la data de la petición en forma de un arreglo/obj de JS
        }).then((data) => {
            // console.table(data)
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}
*/

/*
// productos: 417ms
// 2. con fecth
const getProducts = () => {
    //la tarea dentro de la promesa se va a resolver/terminar en algún punto en el futuro
    return fetch(URL)
    .then((rpta) => {
        // console.log(rpta)
        return rpta.json() //una nueva promesa, para brindarme la data de la petición en forma de un arreglo/obj de JS
    }) .then((data) => {
        // console.table(data)
        return data
    }) .catch((error) => {
        return error
    })
        
}
*/

// productos: 206ms
// 3. con async await
const getProducts = async() => {
    try {
        // fetch deveuelve una promise que resuelve un objeto response, no los datos 
        const rpta = await fetch(URL) 
        console.log(rpta)

        // response.json devuelve una promesa 
        // se resuelve con await y devuelve un objeto de JS
        // se resuelve con await 
        const datos = await rpta.json()
        console.log(datos)
        return datos
    } catch (error) {
        throw error

    }
} 


// POST Request 

// viene de apps.js formCrear
const createProduct = async (objtProduct) => {
    const config = {
        method: "POST",
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(objtProduct)
    }
    // aplicar try catch porque fetch retorna una promesa que se puede resolver con await
    try {
        // fetch(URL, configuración)
        const rpta = await fetch(URL, config)
        // mockapi devuelve en la respuesta el objeto creado. **es opcional, por lo general, no es necesario traer los datos. sufienciente con la rpta**
        const data = await rpta.json()
        return data
    } catch (error) {
        throw error
    }
}

export {
    getProducts,
    createProduct
}