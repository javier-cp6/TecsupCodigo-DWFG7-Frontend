let cartero = new XMLHttpRequest()

const pedirDatos = () => {

    return new Promise((resolve, reject) => {
    // evento que indica estado de petición
        cartero.addEventListener("readystatechange", () => {
            // readyState indica estado de petición
            console.log("monitoreando readyState", cartero.readyState)

            if (cartero.readyState === 4) {
                // console.log(cartero.responseText)
                resolve(cartero.responseText)
            }
        })

        cartero.open("GET","https://reqres.in/api/users?page=2")
        cartero.send()
    })
}

pedirDatos()
.then((resultado)=> {
    console.log(JSON.parse(resultado))
})