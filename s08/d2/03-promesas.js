const hornearTorta = () => {
    // el horneado toma tiempo
    // si sale bien -> resolve
    // si sale mal -> reject

    return new Promise((resolve, reject) => {
        // declarar la tarea que toma tiempo
        setTimeout(() => {
            if(true) {
                resolve("Torta ok")
            } else {
                reject("Torta rechazada")
            }
        }, 3000)
    })

}

// console.log(hornearTorta)
// .then es un método que se ejecuta si el restultado salió bien
hornearTorta()
.then((resultado)=> {
    console.log(resultado)
})
// .catch atrapa un error (probar modificado a if(false))
.catch((error)=> {
    console.log(error)
})