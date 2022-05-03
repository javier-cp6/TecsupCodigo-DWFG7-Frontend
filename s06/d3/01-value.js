let divContenido = document.getElementById("contenido")
divContenido.innerHTML= `<h1>Eventos y value</h1><input type="text" id="input_nombre">`
let inputNombre = document.getElementById("input_nombre")
// setAttribute para input select, textarea
inputNombre.setAttribute("placeholder", "Ingrese su nombre")
inputNombre.setAttribute("required", true)


// evento change / target
inputNombre.addEventListener( "change", function(evento) {
    // el evento también es un objeto
    console.log(evento)
    // desde donde se está disparando el evento
    console.log(evento.target)
    // valor de evento
    console.log(evento.target.value)
})

let btn = document.createElement("button")
btn.innerHTML = "obten el valor!"
divContenido.appendChild(btn)

// también se puede obtener el valor del input
btn.addEventListener("click", function(){
    console.log(inputNombre.value)
})