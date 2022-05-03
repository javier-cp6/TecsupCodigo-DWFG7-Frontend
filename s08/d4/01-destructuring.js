// desestructuración de arrays
let fruits = ["Manzana", "Papaya", "Kiwi", "Piña"]

let fruta = fruits[0]
console.log("fruits[0]", fruta)

let [fruit1, fruit2, fruit3, fruit4] = fruits
console.log("fruit1", fruit1)
console.log("fruit2", fruit2)
console.log("fruit3", fruit3)
console.log("fruit4", fruit4)

// desestructuración de objetos
let person = {
    name:"Alexandra",
    lastname:"Espinoza",
    age:20,
    genre:"F",
    ocupation: {
        type:"Estudiante",
        year_start:2019,
        company:"URP",
    }
}
console.log("person.age", person.age)

// se necesita conocer de antemano la estructura y claves del objeto

// se usa {} porque es un objeto
// es más común acceder directamente a la clave de un subobjeto p.ej ocupation:{company}
let {name, lastname, age, ocupation:{company}} = person
console.log(name, lastname, age, company)
// también funciona
// let {name, lastname, age, ocupation} = person
// console.log(name, lastname, age, ocupation.type)

// con funciones
// opción 1 no recomendada
const describe1 = (name, lastname, age, place, food) => {
    return `Hola, soy ${name} ${lastname}, tengo ${age} años, vengo de ${place}, y me gusta comer ${food}`
}
console.log(describe1("Juan", "Pérez", 30, "Arequipa", "rocoto relleno"))

// opción 2 recomendada
// nombre_funcion({objeto})
const describe2 = ({name, lastname, age, place, food}) => {
    return `Hola, soy ${name} ${lastname}, tengo ${age} años, vengo de ${place}, y me gusta comer ${food}`
}

let newPerson = {
    lastname:"Díaz",
    place:"Lima",
    name:"Alex",
    age:43,
    food:"hamburgesa",
}
// en vez de pasar varios parámetros (name, lastname...), es buena práctica enviar un solo objeto
console.log(describe2(newPerson))