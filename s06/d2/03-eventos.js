let boton = document.querySelector("#boton")

// .addEventListener("evento", function(){})
// evento "click"
boton.addEventListener("click", function(){
    alert("Hola! Hiciste click!")
})

let divContenido = document.getElementById("contenido")
let caja = document.createElement("div")
caja.style.width = "200px"
caja.style.height = "200px"
caja.style.backgroundColor = "rebeccapurple"
caja.style.border = "2px solid orangered"
divContenido.appendChild(caja)

// evento "mouseover"
caja.addEventListener("mouseover", function(){
    console.log("pasaste por encima de la  caja")
})

let seriesTV = [
    "Mr. Robot",
    "The Office",
    "Grey's Anatomy",
    "GOT",
    "Halo",
    "Breakind Bad",
    "Moon Knight",
]

// evento "dbclick"
seriesTV.forEach(function(serie){
    let nuevoParrafo = document.createElement("p")
    console.log(serie)
    nuevoParrafo.innerHTML = serie
    divContenido.appendChild(nuevoParrafo)

    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Has elegido ${serie}`)
    })
})


// alternar estados: botón mostrar/ocultar password

let input = document.createElement("input")

// input.setAttribute("nombre_attr", "valor_attr")
input.setAttribute("type", "password")
divContenido.appendChild(input)

let btnVer = document.createElement("button")
btnVer.innerHTML = "mostrar password"
divContenido.appendChild(btnVer)

// flag
let esVisible = false
btnVer.addEventListener("click", function(){
    // para cambiar entre dos estados haciendo click 
    esVisible = !esVisible

    if(esVisible === true){
        input.setAttribute("type", "text")
        btnVer.innerHTML = "ocultar password"
    }else {
        input.setAttribute("type", "password")
        btnVer.innerHTML = "mostrar password"

    }
})

// preventDefault() previene la acción por defeto al ejecutar en un elemento
let linkGoogle = document.createElement("a")
linkGoogle.innerHTML = "Vamos a Google"
linkGoogle.setAttribute("href", "https://google.com/ncr")
// abrir en nueva ventana
linkGoogle.setAttribute("target", "_blank")
divContenido.appendChild(linkGoogle)

linkGoogle.addEventListener("click", function(evento){
    console.log(evento)
    evento.preventDefault()
    console.log("click!")
})