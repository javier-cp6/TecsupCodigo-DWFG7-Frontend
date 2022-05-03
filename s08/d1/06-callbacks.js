const buscarAlumno = (nombre, cb) => {
    
    setTimeout(() => {
        // cb es una función callback
        console.log(1)
        console.log(2)
        console.log(3)
        console.log(4)
        // aquí se ejecuta el callback
        cb("callback")
    }, 3000)
}


// declaración de callback dentro de la función que la invoca

// forma abreviada 1 (arrow function)
buscarAlumno("Jota", 
// aquí se declara la función cb()
    (texto) => {
        console.log(`yo soy el ${texto}`)
    }
)

// forma abreviada 2
// buscarAlumno("Jota",
//     // aquí se declara la función cb()
//     function(texto) {
//     console.log(`yo soy el ${texto}`)
//     }
// )


// declaración de callback fuera de la función que la invoca
// function cb(texto) {
//     console.log(`yo soy el ${texto}`)
// }
// // cb es el nombre de la función
// buscarAlumno("Javier", cb)