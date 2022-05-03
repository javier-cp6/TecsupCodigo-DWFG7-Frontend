let edad = +prompt("Cuál es tu edad?");

/**
if (edad >= 18) {
    consolelog("Tienes acceso");
} else {
    console.log("No puedes ingresar");
}
*/

if (edad >= 40) {
    console.log("Requiere 3 dosis");
} else if (edad >= 18) {
    console.log("Requiere 2 dosis");
} else if (edad >= 5) {
    console.log("Se recomienda 2 dosis");
} else {
    console.log("Menor de 5 años");
}