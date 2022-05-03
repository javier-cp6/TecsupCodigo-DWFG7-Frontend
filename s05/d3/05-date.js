// Object Date

let hoy = new Date();
console.log(hoy);
console.log(typeof hoy);


console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDate());

// ISO año mes día
let navidad = new Date(2022, 11, 25);
console.log(navidad);

// timeStamp es manejado por todos los lenguajes: cantidad de milisengundos desde el 01.01.1970
let hastaNavidad = navidad - hoy;
console.log("hasta navidad ", hastaNavidad);
let diasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;
console.log(diasParaNavidad);