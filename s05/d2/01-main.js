// funciones
function calcularArea(base, altura) {
    // variable área tiene scope local
    let area = (base * altura) / 2;
    return area;
}

let resultado = calcularArea(10, 15);
console.log(resultado);

let resultado2 = calcularArea(100, 50);
console.log(resultado2);

// una función no siempre requiere parámetros, tampoco es obligatorio un return
function saludar() {
    console.log("Hola!");
}
saludar();