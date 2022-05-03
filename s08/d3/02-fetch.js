// fetch permite hacer peticiones utilizando promesas

// GET
// fetch hace por defecto peticiones GET
// fetch("https://reqres.in/api/users?page=2")
// fetch("https://62636bbcc430dc560d2ebd9f.mockapi.io/productos")

console.log(fetch ("https://6264978ca55d5055be49c4d2.mockapi.io/productos"))
// fetch hace petición y devuelve una promesa que se resolverá (con .then) como un Response

fetch ("https://6264978ca55d5055be49c4d2.mockapi.io/productos")
.then((respuesta) => {
    console.log(respuesta)
    // fetch.then() recibe el objeto Response, no los datos
    // fetch integra el método .json para obtener los datos en formato JSON (equivalente a JSON.parse)
    let res = respuesta.json()
    // respuesta.json() entrega otra promesa que se resolverá (con el siguiente .then) como un objeto de javascript en formato JSON
    console.log(res)
    return res
})
// el segundo .then devuelve un objeto en formato JSON (puede ser un array de objetos o un solo objeto)
.then((datos) => {
    console.table(datos)
})


// POST
// objeto a crear
let newProduct = {
    prod_name: "gorro",
    prod_des: "tejida a mano",
    prod_price: 55,
    prod_image: "https://nataliyanova.com/wp-content/uploads/2019/09/WH093_Burgundy-scaled.jpeg",
}

// configurar petición
let configuracion = {
    // método HTTP: GET, POST, PUT, DELETE
    'method': 'POST',
    'headers': {
        // tipo de contenido: JSON, BIN, text
        'Content-Type': "application/json",
    },
    // body es la data a enviar
    'body': JSON.stringify(newProduct)
}

// fetch(url_endpoint, configuracion)
// fetch("https://62636bbcc430dc560d2ebd9f.mockapi.io/productos", configuracion)
fetch("https://6264978ca55d5055be49c4d2.mockapi.io/productos", configuracion)
.then((response) => {
    console.log(response)
    return response.json()
})
.then((data) => {
    console.table(data)
})
