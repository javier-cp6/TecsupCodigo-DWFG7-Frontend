// solución 1: inventario de productos desde consola
console.log("Bienvenido!");

let tipProd1 = "toner";
let tipProd2 = "cabezal";
let tipProd3 = "tinta";
let cantProd1 = 0;
let cantProd2 = 0;
let cantProd3 = 0;

function contar(prod) {
    if (prod == tipProd1) {
        cantProd1++;
        console.log(`${tipProd1}: ${cantProd1}`);
    } else if (prod == tipProd2) {
        cantProd2++;
        console.log(`${tipProd2}: ${cantProd2}`);
    } else if (prod == tipProd3) {
        cantProd3++;
        console.log(`${tipProd3}: ${cantProd3}`);
    } else if (prod == "finalizar") {
        cantTotal = cantProd1 + cantProd2 + cantProd3;
        console.log(`Total de productos: ${cantTotal} (${tipProd1}: ${cantProd1}, ${tipProd2}: ${cantProd2}, ${tipProd3}: ${cantProd3})`);
    } else {
        console.log("Ingrese nombre de producto correctamente");
    }
}

let tipProd;
do {
    tipProd = prompt("Ingrese nombre de producto (toner, cabezal o tinta) o finalizar para obtener inventario total");
    contar(tipProd);
} while (tipProd !== "finalizar");
