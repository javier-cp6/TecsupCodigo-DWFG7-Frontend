// en JS todo es un objeto. Las variables, las funciones, etc, todo.

let nombre = "Osmar";
console.log(nombre.length);

let perro = {
    nombre: "Backus",
    edad: 14,
    ladra: function () {
        console.log("guau");
    }
};

console.log(perro.edad);

let numero = 20;
console.log(typeof numero);

// new Number() es un constructor de objetos tipo Number
let edad = new Number("31");
console.log(typeof edad);
console.log(edad + 5);

perro.ladra();

let arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
console.log(arr);