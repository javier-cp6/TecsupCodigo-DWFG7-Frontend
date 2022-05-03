/**
Costos de una clínica:
3 primeras consultas 150 soles c/u,
2 siguientes 120,
2 subsiguientes 100,
y las restantes 60 c/u

Se requiere:
a) Cuánto pagará el paciente por todas sus citas
 */


let cost3 = 150;
let cost5 = 120;
let cost7 = 100;
let cost8 = 60;

// function costoTotal(citas) {
//     if
//     return
// }

/**
Ejercicio 1: tarifa por cita
// solución 1: con if, else if 
let citas = +prompt("Ingrese núnero de citas");
// solución 1: con else if
if (citas >= 8) {
    let suma = (citas - 7) * 60 + 200 + 240 + 450;
    console.log("suma " + suma);
    
} else if (citas >= 5 && citas <= 7) {
    let suma = (citas - 5) * 100 + 240 + 450;
    console.log("suma " + suma);
    
} else if (citas > 3 && citas <= 5) {
    let suma = (citas - 3) * 120 + 450;
    console.log("suma " + suma);
    
} else if (citas <= 3) {
    let suma = citas * 150;
    console.log("suma " + suma);
}

// similar
let citas = +prompt("ingrese numero de citas");
let cost = 0;
if (citas <= 3) {
    cost = citas * 150;
} else if (citas <= 5) {
    cost = 450 + (citas - 3) * 120;
} else if (citas <= 7) {
    cost = 450 + 240 + (citas - 5) * 100;
} else {
    cost = 450 + 240 + 200 + (citas - 7) * 60;
}
console.log(`El costo por todas sus citas es ${cost}`);
*/

/**
// solución 2: con for, if, else if (tarifa por cita)
let citas = +prompt("Ingrese núnero de citas");

let pago = 0;
for (let i = 1; i <= citas; i++) {
    if (i >= 1 && i <= 3) {
        pago = i * 150;
    } else if (i > 3 && i <= 5) {
        pago = (i - 3) * 120 + 3 * 150;6
    } else if (i > 5 && i <= 7) {
        pago = (i - 5) * 100 + 120 * 2 + 3 * 150;
    } else {
        pago = (i - 7) * 60 + 2 * 100 + 2 * 120 + 3 * 150;
    }
}
console.log(`El costo por todas sus citas es ${pago}`);
*/



// Ejercicio 2: tarifa por paquete (contador de citas)

// Uná clínica al hacer consultas va ajustando los precios:
//     las 3 primeras consultas cuestan 150 c/u
//     las 2 siguientes cuestan 120 c/u
//     las 2 siguientes cuestan 100 c/u
//     y las restantes después de estas cuestan 60 c/u

// Se requiere saber:
// a) Cuanto pagará el paciente por todas sus citas realizadas
//  */

//cita 1,2,3 = 150
//cita 4,5 = 120
//cita 6,7 = 100
// cita 8 a más = 60

let costoTotal = 0;
let contCitas = 1;
let sano = false;

let pregunta;

do {
    pregunta = confirm("Desea solicitar una cita?");
    if (pregunta === true) {
        console.log(contCitas);
        if (contCitas >= 1 && contCitas <= 3) {
            costoTotal = costoTotal + 150;
            console.log(150);
        } else if (contCitas <= 5) {
            costoTotal = costoTotal + 120;
            console.log(120);
        } else if (contCitas <= 7) {
            costoTotal = costoTotal + 100;
            console.log(100);
        } else {
            costoTotal = costoTotal + 60;
            console.log(60);
        }
        // después del if
        contCitas++;
    } else {
        sano = true;
    }

    console.log("costo total", costoTotal);
} while (sano === false);