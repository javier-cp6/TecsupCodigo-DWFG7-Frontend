// interface = contrato

// similar a la creación de una clase
// ? para indicar que es opcional
interface iAnimal {
    nombre:string,
    edad:number,
    colores:Array<string>,
    raza:string,
    tamanio:number,
    genero:string,
    bigotes?:boolean
}

// objetos
let gato:iAnimal = {
    nombre:"Don Gato",
    edad:10,
    colores:["banco", "café"],
    raza:"siamés",
    tamanio:5,
    genero:"hembra",
    bigotes:true
}