// 1. pedir al usuario nombres, apellidos y edad. Resultado un console.log con los datos
// let nombre = prompt("¿Cuál es tu nombre?");
// let apellido = prompt("¿Cuál es tu apellido?");
// let edad = prompt("¿Cuál es tu edad?");
// console.log(`${nombre} ${apellido} de ${edad} de edad`)

// 2. calcular área de un triángulo y mostrar resultado en consola
let base = +prompt("dimensión de la base en mm");
console.log(typeof base);
let altura = +prompt("dimensión de la altura en mm");
let area = (base * altura)/2
console.log(`el área del triángulo es ${area} mm2`);
