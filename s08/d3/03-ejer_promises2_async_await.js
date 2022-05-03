// solución 2 con async await

const jugarMaq1 = async () => {
    let random = Math.random()
    if(random > 0.5) {
        return "ganaste en máquina 1"
    } else {
        throw "perdiste en máquina 1"
    }
}

const jugarMaq2 = async () => {
    let random = Math.random()
    if(random > 0.5) {
        return "ganaste en máquina 2"
    } else {
        throw "perdiste en máquina 2"
    }
}

const jugarMaq3 = async () => {
    let random = Math.random()
    if(random > 0.5) {
        return "ganaste en máquina 3"
    } else {
        throw "perdiste en máquina 3"
    }
}

const jugar = async () => {
    try {
        let resultado1 = await jugarMaq1()
        // console.log(jugarMaq1()) // promise
        console.log(resultado1)
        let resultado2 = await jugarMaq2()
        console.log(resultado1)
        let resultado3 = await jugarMaq3()
        console.log(resultado1)
    } catch (error) {
        console.log(error)
        console.log("juego terminado")
    }
}
console.log(jugar())
jugar()
