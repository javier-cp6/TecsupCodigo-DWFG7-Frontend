let alumnos = ["Javier", "Erika", "Nohemi", "Alex", "Diana"];

let busqueda = prompt("Ingrese el nombre del alumno");

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
    if (busqueda === alumnos[i]) {
        console.log(`${busqueda} se encuentra en la posición ${i}`);
        break;
        // break: si se cumple la condición detiene la iteración
    }
}
/**
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        console.log({ i, j });
        if (j === 3) {
            break;
        }
    }
}
*/

// seleccionar las notas aprobatorias
let notas = [15, 18, 13, 12, 9, 14, 20, 6, 0, 10];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 13) {
        continue;
        // continue: si se cumple la condición (< 13) ya no ejecuta las siguientes líneas del código, pero continúa con la iteración 
    }
    console.log(notas[i]);
}