// document es un objeto que permite modificar el DOM

let titulo = document.getElementById("titulo");
console.log(typeof titulo); //objeto
console.log(titulo);
console.log(titulo.innerHTML);

// innerHTML modifica el HTML interno del elemento
titulo.innerHTML = "<i>Nuevo Título</i>";
console.log(titulo.innerHTML);

// nomenclatura de variables
// snake-case --> camelCase
// element.style.propiedad = "valorPropiedadCSS"
titulo.style.color = "red";
titulo.style.padding = "20px";
titulo.style.backgroundColor = "blue";
titulo.style.borderRadius = "10px";
titulo.style.textAlign = "center";
console.log(titulo.style);

// document.querySelector de CSS
// sin . para llamar etiquetas
let main = document.querySelector("main");
main.style.backgroundColor = "lightblue";

// incluir . para llamar a una clase o # para un id
let subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo);
subtitulo.style.border = "4px solid #4c4c4c";

let listaItems = document.querySelectorAll(".li_item");
console.log(listaItems);
listaItems.forEach(function (liItem) {
    liItem.style.fontFamily = "Arial";
    liItem.style.color = "purple";
});

// Agregar elementos al HTML

// seleccionar elemento HTML
let divContenido = document.getElementById("contenido")

let miParrafo = document.getElementById("parrafo")
console.log(miParrafo) //null dado que aún no existe el elemento

// opc 1: agregar contenido al elemento divContenido con innerHTML
divContenido.innerHTML = `<p id="parrafo">divContenido Arriba peru!</p><div>divContenido Segundo párrafo</div>`


// opc 2: crear elemento y agregarlo al HTML con appendChild
// document.createElement("elem") (elem: p, div, h1, input, etc)
let divAlerta = document.createElement("div")
console.log(divAlerta)
// crea elemento(objeto) sin agregarlo al html
divAlerta.innerHTML= "El repechaje es el 13 de junio"

// aappendChild añade un elemento al html como hijo de otro elemento
// divContenido padre, divAlerta hijo
divContenido.appendChild(divAlerta)
divAlerta.style.color="red"


// ejemplo con if
let preguntar = confirm("apoyas a la selección?")
if (preguntar === true) {
    let divApoyo = document.createElement("div")
    divApoyo.innerHTML = "Vamos Perú!!!"
    divContenido.appendChild(divApoyo)
    divApoyo.style.color= "red"
}

// agregar imagen
let imagen = document.createElement("img")
// setAtribute("nombre_attr", "valor_attr")
imagen.setAttribute("src", "https://pbs.twimg.com/media/EvgxLWgXUAYzZlB.jpg")
imagen.setAttribute("alt", "recordatorio de nomenclatura en variables")
imagen.style.width="400px"
divContenido.appendChild(imagen)


// agregar elementos de un array
let seleccion = ["Cueva", "Lapadula", "Corzo", "Carrillo", "Gallese", "Trauco", "Flores"]
seleccion.forEach(function(player){
    let pJugador = document.createElement("p")
    pJugador.innerHTML = player
    divContenido.appendChild(pJugador)
})
console.log(divContenido)

// .querySelector con selectores múltiples
let p5 = document.querySelector("#contenido p:nth-of-type(5)")
console.log("p5", p5)

// .insertAdjacentElement
let entrenador = document.createElement("p")
entrenador.innerHTML= "Gareca"
entrenador.style.color = "red"
entrenador.style.fontWeight = "bold"
p5.insertAdjacentElement("afterend", entrenador)
