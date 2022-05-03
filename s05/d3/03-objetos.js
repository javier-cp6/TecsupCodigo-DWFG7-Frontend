let gato = {
    nombre: "Tornillo",
    color: "blanco",
    edad: 4,
    raza: "Angora",
    // no es común
    ["color_ojos"]: "azul",
    hobbies: ["dormir", "jugar", "comer"],
    comer: function () {
        console.log("miau miau miau");
    }
};
// objeto.propiedad
console.log(gato.nombre);
console.log(gato.edad);

// objeto["propiedad"] no es comun
console.log(gato["raza"]);

console.log(gato.color_ojos);
console.log(gato.hobbies[1]);
gato.comer();

// uso de objeto[propiedad]
function devuelveValor(prop) {
    return gato[prop];
    // no funcionaría con gato.prop
}
console.log("nombre del gato", devuelveValor("nombre"));


// función que devuelve un array de propiedades 
function devuelveValor(arrProps) {
    let arrTemp = [];
    for (let i = 0; i < arrProps.length; i++) {
        arrTemp.push(gato[arrProps[i]]);
    }
    return arrTemp;
}
console.log("array", devuelveValor(["nombre", "edad", "color"]));


// ejecrcicio 2
let albumMusical = {
    nombre: "Labour of Love",
    fechaLanzamiento: "01/10/1983",
    genero: ["Reggae", "Indie"],
    canciones: [
        {
            titulo: "Red Red Wine",
            autor: ["Neil Diamond", "UB40"],
            duracion: null,
        },
        {
            titulo: "Cherry Oh Baby",
            autor: ["UB40"],
            duracion: 3.18,
        },
    ]
};
console.log(albumMusical.canciones[0]["autor"]);
console.log(albumMusical.canciones[0].autor[0]);

console.log(albumMusical.canciones);

// console.log(albumMusical.canciones[0].duracion + 10);

if (albumMusical.canciones[0].duracion === null) {
    console.log("NO EXISTE!");
}


