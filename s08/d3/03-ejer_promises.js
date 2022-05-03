// solución 1 con promises

const jugarMaq1 = () => {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        if(random > 0.5) {
            resolve("ganaste en máquina 1")
        } else {
            reject("perdiste en máquina 1")
        }
    })
}

const jugarMaq2 = () => {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        if(random > 0.5) {
            resolve("ganaste en máquina 2")
        } else {
            reject("perdiste en máquina 2")
        }
    })
}

const jugarMaq3 = () => {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        if(random > 0.5) {
            resolve("ganaste en máquina 3. juego terminado")
        } else {
            reject("perdiste en en máquina 3")
        }
    })
}


jugarMaq1()
.then((resolve)=> {
    console.log(resolve)

    // se puede incluir prepararGlaseado() dentro de then, pero es mala práctica (callback hell). 
    // prepararGlaseado()
    // .then((glaseado) => {
    //     console.log(glaseado)
    // }) 
    return jugarMaq2()
})
.then((resolve) => {
    console.log(resolve)
    return jugarMaq3()
}) 
.then((resolve) => {
    console.log(resolve)
}) 

// otra ventja es que sólo se necesita un .catch para todos los errores de las 3 promesas anteriores
.catch((juegoPerdido) => {
    console.log(juegoPerdido)
    console.log("juego terminado")
})

