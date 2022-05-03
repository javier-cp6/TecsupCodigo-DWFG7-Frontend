const alumnosDB = ["Alejandro", "José", "Camila", "Diego", "Mauro"]

// function () {} ----> () => {}
const buscarAlumno = (nombre) => {
    let alumnoEncontrado = null

    // simulación de búsqueda. no es eficiente con miles de registros
    setTimeout(() => {
        for (let i = 0; i < alumnosDB.length; i++) {
            if(alumnosDB[i] === nombre) {
                alumnoEncontrado = true
            }
        }
        console.log("búsqueda finalizada. alumnoEncontrado:", alumnoEncontrado)
    }, 1000);

    return alumnoEncontrado
}
console.log(buscarAlumno("José")) 
// null. return alumnoEncontrado (null) se ejecuta antes de que termine la iteración con setTimeout()


// callback
// se requiere un callback para que 
const buscarAlumno1 = (nombre, cb) => {
    let alumnoEncontrado = null

    // simulación de búsqueda. no es eficiente con miles de registros
    setTimeout(() => {
        for (let i = 0; i < alumnosDB.length; i++) {
            if(alumnosDB[i] === nombre) {
                alumnoEncontrado = true
            }
        }
        // callback
        cb(alumnoEncontrado)
    }, 1000);
}

buscarAlumno1("José", (alumnoEncontrado) => {console.log("búsqueda finalizada. alumnoEncontrado:", alumnoEncontrado)})
