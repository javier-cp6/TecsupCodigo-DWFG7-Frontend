// declaración de función
// function saludo(nombre) {
//     return `Hola, soy ${nombre}`
// }

// función flecha
let  saludo = (nombre) => {
    return `Hola, soy ${nombre}`
}
console.log(saludo("Omar"))

// función flecha con parámetro default
const saludo2 = (nombre = "Daniel") => `Hola, soy ${nombre}`
console.log(saludo2("Omar"))
console.log(saludo2())

// es buena práctica utilizar const para funciones y arrays 
const arreglo = ["Fresa", "Kiwi"]
arreglo.push("Papaya")
console.log(arreglo)
