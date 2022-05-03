
let edad = +prompt("Cuál es tu edad?");

if (edad >= 70) {
    console.log("Se recomienda examen general");
} else if (edad <= 69 && edad >= 40) {
    console.log("Se recomienda reservar cita en cardiología");
} else if (edad <= 39 && edad >= 18) {
    console.log("Visite medicina general");
} else if (edad === 15 || edad === 12) {
    console.log("Adoslescente");
} else {
    console.log("Visite pediatría");
}


/**
//Negación, anteponiendo a un booleano el simbolo "!""

let estabasConTusAmigos = true;
console.log(!estabasConTusAmigos);

//!== diferente de
let numero = 19;
if (numero !== 20) {
    console.log("No es excelente");
}
*/
