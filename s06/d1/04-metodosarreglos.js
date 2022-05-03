let nums = [10, 20, 30, 40];

// push agrega elemento al finally, pop elimina último elemento
nums.push(50);
nums.push(60);
nums.pop();
console.log(nums);

let alumnos = ["alumno1", "alumno2", "alumno3", "alumno4"];

// forEach
// opc 1: expresión de función
alumnos.forEach(
    function (alum) {
        // por cada alum que encuentre, ejecuta;
        console.log(alum);
    }
);
// opc 2: arrow function
alumnos.forEach(
    (alum) => {
        console.log(alum);
    }
);

// map: a diferencia de forEach, devuelve un array[]
// opc 1
let saludos = alumnos.map(function (nomb) {
    return `Hola ${nomb}`;
});
console.log(saludos);
// opc 2
let saludos2 = alumnos.map((nomb) => `Hola ${nomb}`);
console.log(saludos2);


// filter(): devuelve un array[]
let notas = [10, 20, 15, 17, 11, 13, 11, 16];
let aprobados = notas.filter(function (nota) {
    return nota >= 13;
});
console.log(aprobados);

// includes() devuelve un boolean (true o false)
let existeAlumno = alumnos.includes("alumno3");
console.log(existeAlumno);

let peliculasGenero = peliculas.filter(function (pelis) {
    return pelis.genre_ids.includes(18);
});
console.table(peliculasGenero);