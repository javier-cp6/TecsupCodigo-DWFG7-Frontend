// solución 2: página de inventario productos
console.log("Bienvenido!");

// constructor objeto producto
function Producto(id, nombre, stock) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
}

// función para agregar productos al array inventario[]
let inventario = [];
function addProduct(id, nombre, stock) {
    let p = new Producto(id, nombre, stock);
    inventario.push(p);
}
addProduct("prod1", "toner", 0);
addProduct("prod2", "cabezal", 0);
addProduct("prod3", "tinta", 0);

// función para sumar stock de productos del array inventario[]
function sumarTotal() {
    let cantTotal = inventario.reduce((accumulator, object) => {
        return accumulator + object.stock;
    }, 0);
    return cantTotal;
}

// .findIndex para encontrar producto en array inventario[]
function buscar(nomProd) {
    let index = inventario.findIndex(e => e.nombre === nomProd);
    if (index !== -1) {
        inventario[index].stock++;
        console.log(inventario[index].nombre, inventario[index].stock);
        document.getElementById(nomProd).innerHTML = inventario[index].stock;
        document.getElementById("cantTotal").innerHTML = sumarTotal();
    }
}

// función para mostrar inventario en consola
function mostrarTotal() {
    console.table(inventario);
}