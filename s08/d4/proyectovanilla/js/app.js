// tareas
// 1. obtener los datos de mockapi
// 1.1 indentificar si los datos están en formato o estructura requeridos (mockapi guarda un JSON)
// 2. Convertir datos e inseertarlos en el HTML

import { createProduct, getProducts } from "./productoService.js";
import { drawProducts } from "./interfaz.js";

// se requiere 3 referencias: 
// 01 el botón para escuchar el click
// 02 para el modal que se transformará en un modal de bsModalCrear
// 03 para el form
const btnCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)
const formCrear = document.getElementById("formCrear")


// async devuelve una promesa que se resuelve con await
const obtainProducts = async() => {
    try {
        // await devuelve un objeto (array de objetos)
        const products = await getProducts()
        // console.log({products})
        // console.log({products:products})
        console.table(products)
        drawProducts(products)
    } catch (error) {
        alert("mensaje ocurrio un error al obtener la data")
    }
}
obtainProducts()


// viene de referencias
btnCrear.addEventListener("click", () => {
    bsModalCrear.show()
})


// agregar asyng para indicar que la función a ejecutar el submit es asíncrona
formCrear.addEventListener("submit", async (e) => {
    // e = evento, preventDefault()
    e.preventDefault()
    // obtener los valores de los input
    // console.log(formCrear.prod_name.value)
    const newProduct = {
        prod_name: formCrear.prod_name.value,
        prod_desc: formCrear.prod_desc.value,
        prod_price: formCrear.prod_price.value,
    }
    console.log(newProduct)
    try {
        await createProduct(newProduct)
        // limpia inputs
        formCrear.reset()
        // esconde el modal 
        bsModalCrear.hide()
        // obtiene actualización de productos 
        // no requiere await dado que la función no captura ninguna respuesta
        obtainProducts() 

        // sweetalert modal
        Swal.fire({
            icon: 'success',
            title: 'Éxito!',
            text: 'Producto creado!',
          })
        
    } catch (error) {
        // throw error
        alert("Hubo un error al crear")
    }
})


