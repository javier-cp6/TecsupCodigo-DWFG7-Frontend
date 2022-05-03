let saludo = "Hola ";
let presentacion = "soy Jorge";
console.log(saludo + presentacion);

let a = "10";
let b = 2;
console.log("suma", a + b);
console.log("resta", a - b);

// template String, template literal
let edad = 31;

// backticks ``
let oracion = `Buenas noches ${presentacion}, mucho gusto, tengo ${edad} años`;
console.log(oracion);

// propmt
let cantidadMascotas = prompt("Hola, cuántas mascotas tienes?");
console.log(`Mascotas : ${cantidadMascotas}`);
// typeof
console.log(typeof cantidadMascotas);

// con + adelante reemplaza al parseInt o parseFloat
let convertido = +cantidadMascotas;
console.log(convertido);
console.log(typeof convertido);