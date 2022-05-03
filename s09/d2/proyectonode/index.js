// console.log("Hola Perú!")


// import axios from "axios"
// cuando se instala algo dentro de los node_modules, se pude llamar directamente
// por eso se llama a const con el mismo nombre: const axios
const axios = require("axios");

// axios.método
// axios.get
// axios.post
// axios.put
// axios.delete

axios.get("https://6264978ca55d5055be49c4d2.mockapi.io/productos")
.then ((rpta) => {
    // console.log(rpta)
    // la respuesta es un objeto que tiene la propiedad data con los datos (array de objetos en este caso)
    console.log(rpta.data)

})
.catch ((error) => {
    console.log(error)
})