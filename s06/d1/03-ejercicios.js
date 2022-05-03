// peliculas[] de datos.js
// generos[] de datos.js

// for of
let frutas = ["manzana", "plátano", "pera"];
for (let fruta of frutas) {
    console.log(fruta);
}

// iteración for if
function peliculasPorIdioma(idioma) {
    let pelisSeleccionadas = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].original_language === idioma) {
            pelisSeleccionadas.push(peliculas[i]);
        }
    }
    // después de que el for termine
    return pelisSeleccionadas;
}

let pelis = peliculasPorIdioma("en");
console.table(pelis);


// ejercicio 1: función que reciba el género y muestre las películas de ese genero
// sugerencias: buscar id del género, asignar su valor a una variable y luego buscar películas con dicho id

/**
preguntar género
for iteración: recorrer generos[]
    if genero = nombre de genero, guardar id, finaliza iteración;
for iteración: recorrer peliculas[]
    for iteración: recorrre genre_ids[]
        if id = id en genre_ids[], agrega a selección []
imprime selección[];
 */

function peliculasPorGenero(nombreGenero) {
    let id;
    let pelisSeleccionadas = [];

    for (let i = 0; i < generos.length; i++) {
        if (nombreGenero === generos[i].name) {
            id = generos[i].id;
            console.log(id);
            break;
        }
    }

    // opción 1: con doble for
    for (let j = 0; j < peliculas.length; j++) {
        for (let k = 0; k < peliculas[j].genre_ids.length; k++) {
            if (id === peliculas[j].genre_ids[k]) {
                pelisSeleccionadas.push(peliculas[j]);
            }
        }
    }

    // opción 2: con includes()
    // for (let i = 0; i < peliculas.length; i++) {
    //     if (peliculas[i].genre_ids.includes(id) === true) {
    //         pelisSeleccionadas.push(peliculas[i]);
    //     }
    // }

    return pelisSeleccionadas;
}
let gen = prompt("Indique género");
let pelas = peliculasPorGenero(gen);
console.table(pelas);