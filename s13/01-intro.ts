let saludo = "Hola Perú!"
console.log(saludo)

// Tipado
// let_nom_variable:tipo = valor

let texto:string = "comida"
let cantidad:number = 21
let booleano:boolean = true
let regalos:Array<string> = ["a", "b", "c"]
let random:any = undefined // cualquier valor

// Transpilar y ejecutar
// tsc .\01-intro.ts
// node .\01-intro.js

// funciones
const sumar = (num1:number, num2:number):number => {
    return num1 + num2
}
console.log(sumar(6,10))

