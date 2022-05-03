// se encarga de generar elementos en el dom

const drawProducts = (arrProducts) => {
    const divProductos = document.getElementById("divProductos")

    // guarda el html generado a partir de arrProducts
    let contentProducts = '' 

    // se desestructura cada item (objeto) que tenga arrProducts
    arrProducts.forEach(({id, prod_name, prod_desc, prod_price,prod_image}) => {
        // por cada item de arrProducts se crea una card de BS
        let cardProduct = `
        <div class="col-lg-3 col-sm-12">
            <div class="card" style="width: 18rem;">    
                <img src="${prod_image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod_name}</h5>
                    <p class="card-text">${prod_desc}</p>
                    <p class="card-text">S/ ${prod_price}</p>
                    <button class="btn btn-primary" data-id="${id}"> Agregar </button> 
                </div>
            </div> 
        </div>
        `
        // concatenar html de todos los items
        // contentProducts = contentProducts + cardProduct
        contentProducts += cardProduct
    });
    // modificar index.html
    divProductos.innerHTML = contentProducts
}
export {
    drawProducts
}