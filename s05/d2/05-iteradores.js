/**
// while
let contador = 1;
while (contador <= 15) {
    console.log(contador);
    contador++;
    console.log(contador);
}

// for
for (let cont = 0; cont <= 10; cont++) {
    console.log(`El contador es ${cont}`);
}
*/

let precioProd = 3000;
let ahorro = 0;
let propina = 0;

for (ahorro = 5; ahorro <= 30; ahorro = ahorro + propina) {
    propina = +prompt("Ingrese la propina");
    console.log("Propina", propina);
    console.log("Ahorro", ahorro + propina);
}