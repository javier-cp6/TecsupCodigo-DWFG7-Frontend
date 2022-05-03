// arrays
let nombres = ["Rosa", "Raúl", "Pedro", "Pamela"];
console.table(nombres);
console.log(typeof nombres);


console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[0]);
console.log(nombres[3]);

console.log(nombres.length);
nombres.push("Felipe"
);
console.log(`Los alumnos elegidos son ${nombres[3]} y ${nombres[2]}`);


// arreglos con for
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}