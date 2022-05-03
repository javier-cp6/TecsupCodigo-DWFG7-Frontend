import suma, {url, array, sum} from "./04-modulos.js"
// suma al ser default no requiere ir entre {}

console.log(url)
array.forEach((item) => {
    console.log(item)
})

console.log(sum(10,15))
console.log(suma(20,15))


// no es recomendable importar todo a la vez
// import * as miModulo from "./04-modulos.js"

// console.log(miModulo.sum(4,9))
// console.log(miModulo.url)