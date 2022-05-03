// ejercicio 1
let movies = [
    {
        nombrePelicula: "Blade Runner",
        anio: 1982,
        director: "Ridley Scott",
        genero: "Ciencia Ficción"
    },
    {
        nombrePelicula: "Parasite",
        anio: 2019,
        director: "Bong Joon-ho",
        genero: "Drama"
    },
    {
        nombrePelicula: "El Padrino",
        anio: 1972,
        director: "Francis Ford Coppola",
        genero: "Drama"
    }
];

for (let i = 0; i < movies.length; i++) {
    console.log(`La película ${movies[i].nombrePelicula} del año ${movies[i].anio} fue dirigida por ${movies[i].director}`);
}

// ejercicio 2
// pregunte presupuesto al usuario y ofrezca juegos
let arrJuegos = [
    {
        nombre: "Halo",
        precio: 35
    },
    {
        nombre: "Outer Wilds",
        precio: 24
    },
    {
        nombre: "Civilization V",
        precio: 90
    },
    {
        nombre: "Stardew Valley",
        precio: 30
    },
    {
        nombre: "The Witcher 3",
        precio: 40
    },
    {
        nombre: "Portal",
        precio: 5
    }
];

// solución 1 con for, if continue
/**
for iteración: comparar ppto con precio de item;
    if ppto < precio, continúa iteración
        de lo contrario, ofrece compra de item;
    if acepta compra,
        agrega compra al carrito, descuenta precio del ppto y continúa iteración
imprime compras y vuelto;
 */
/**
let presupuesto = +prompt("¿Cuánto piensa invertir?");
let juegosAComprar = [];

for (let i = 0; i < arrJuegos.length; i++) {
    if (presupuesto < arrJuegos[i].precio) {
        // continue hace que no se ejecute el resto del código cuando se cumple la condición de if() y continúa con la iteración. Ya no se requiere else
        continue;
    }
    // si el presupuesto es mayor al precio, ofrece producto
    let compra = confirm(`Desea comprar ${arrJuegos[i].nombre} que cuesta S/ ${arrJuegos[i].precio}?`);

    if (compra === true) {
        juegosAComprar.push(arrJuegos[i]);
        // -= simplifica el código (presupuesto - arrJuegos[i].precio)
        presupuesto -= arrJuegos[i].precio;
        console.log(presupuesto);
    }
}

if (juegosAComprar.length == 0) {
    console.log("Presupuesto insuficiente");
    alert("Presupuesto insuficiente");
} else {
    console.table(juegosAComprar);
    console.log(`Su vuelto es S/ ${presupuesto}`);
    alert(`Su vuelto es S/ ${presupuesto}`);
}
*/


// solución 2 con for, doble if
let ppto = +prompt("Ingrese ppto");
let carrito = [];
let costoTotal = 0;
for (i = 0; i < arrJuegos.length; i++) {
    if (ppto >= arrJuegos[i].precio) {
        aceptCompra = confirm(`acepta compra de ${arrJuegos[i].nombre} por S/ ${arrJuegos[i].precio}?`);
        if (aceptCompra === true) {
            carrito.push(arrJuegos[i]);
            ppto -= arrJuegos[i].precio;
            costoTotal += arrJuegos[i].precio;
        }
    }
}

if (carrito.length == 0) {
    alert("saldo isufiente");
    console.log("saldo isufiente");
} else {
    console.log(carrito);
    console.log(`el costo total es S/ ${costoTotal} y su vuelto es S/ ${ppto}`);
    alert(`el costo total es ${costoTotal} y su vuelto es S/ ${ppto}`);
}

