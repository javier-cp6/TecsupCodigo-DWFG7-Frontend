let cartero = new XMLHttpRequest()

const pedirDatos = (tareaFinal) => {
    // evento que indica estado de petición
    cartero.addEventListener("readystatechange", () => {
        // readyState indica estado de petición
        console.log("monitoreando readyState", cartero.readyState)

        if (cartero.readyState === 4) {
            console.log(cartero.responseText)
            tareaFinal(cartero.responseText)
        }
    })

    cartero.open("GET","https://reqres.in/api/users?page=2")
    cartero.send()
}

pedirDatos((datos) => {
    let datosConvertidos = JSON.parse(datos)
    console.log(datosConvertidos)
})