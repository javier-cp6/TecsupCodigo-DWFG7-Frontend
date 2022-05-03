let formmulario = document.getElementById("formulario")
let tareasguardadas = document.getElementById("tareasguardadas")

let porHacer = []
// evento submit
formmulario.addEventListener("submit", function(eve){
    // agregar preventDefault para los eventos submit
    eve.preventDefault()
    // form["input_name"].value
    // console.log("submit!", formmulario["tareanueva"].value)
    agregarTarea(formmulario["tareanueva"].value)
    guardarEnLS ()
})

function agregarTarea (tarea) {
    porHacer.push(tarea)
    let nuevaTarea = document.createElement("p")
    nuevaTarea.innerHTML = tarea
    tareasguardadas.appendChild(nuevaTarea)
}

function guardarEnLS(){
    // JSON (JavaScript Object Notation)
    // JSON.stringify convierte a texto)
    let porHacerAString = JSON.stringify(porHacer)
    // localStorage.setItem("key", "value")
    localStorage.setItem("tareasPorHacer", porHacerAString)
}

function leerLS() {
    // localStorage.getItem("key")
    let tareasEnLS = localStorage.getItem("tareasPorHacer")
    // console.log(typeof tareasEnLS) // string
    // console.log(tareasEnLS) 
    let porHacerAArray = JSON.parse(tareasEnLS)
    // console.log(typeof porHacerAArray) // object
    console.log(porHacerAArray)
    porHacerAArray.forEach(function(tarea) {
        agregarTarea(tarea)
    });
}
// completa la lista de tareas guardadas en el local storage
leerLS()