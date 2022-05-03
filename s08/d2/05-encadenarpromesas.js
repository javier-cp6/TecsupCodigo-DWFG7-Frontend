const hornearTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("torta ok")
            } else {
                reject("torta rechazada")
            }
        }, 5000);
    })
}

const prepararGlaseado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("glaseado ok")
            } else {
                reject("glaseado rechazado")
            }
        }, 3000);
    })
}

const cubrirTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false) {
                resolve("torta cubierta ok")
            } else {
                reject("cubierta rechazada")
            }
        }, 3000);
    })
}


hornearTorta()
.then((tortalista)=> {
    console.log(tortalista)

    // se puede incluir prepararGlaseado() dentro de then, pero es mala práctica (callback hell). 
    // prepararGlaseado()
    // .then((glaseado) => {
    //     console.log(glaseado)
    // }) 
    return prepararGlaseado()
})
.then((glaseado) => {
    console.log(glaseado)
    return cubrirTorta()
}) 
.then((tortaCubierta) => {
    console.log(tortaCubierta)
}) 

// otra ventja es que sólo se necesita un .catch para todos los errores de las 3 promesas anteriores
.catch((tortaArruinada) => {
    console.log(tortaArruinada)
    console.log("producto rechazado")

})
