// spread operator para objetos
let pikachu1 = {
    color:"amarillo",
    vida:20,
    fuerza:40,
}

// con = se copia la misma dirección de la memoria
// si se modifica pikachuRojo se actualiza pikachu1
let pikachuRojo = pikachu1
pikachuRojo.vida = 15
pikachuRojo.color = "rojo"

console.table(pikachuRojo)
console.table(pikachu1)

// spread operator para objetos

// copia el contenido de un objeto y lo asigna a una nueva variable
// se pueden agregar o modificar propiedades al objeto
let pikachuAzul = {...pikachu1, fuerza: 100, tipo: "Radioactivo", color:"azul"}

console.table(pikachuAzul)
console.table(pikachu1)

// spread operator para arrays

let platosAqp = ["Chicharrón","Rocoto Relleno","Cuy Chactado"]
let platosLima = ["Lomo Saltado","Causa Limeña","Aji de Gallina"]

// permite unir arrays 
let platosPeru = [...platosAqp, ...platosLima, "Lechón", "Humitas"]

console.log(platosPeru)