// Objeto Math:
// Es un objeto que tiene métodos no estáticos, es decir, no necesita ser “instanciado” o no requiere declararse con “new”.

// sqrt (raíz cuadarada)
let raiz = Math.sqrt(25);
console.log("raíz de 25", raiz);

// floor redondea para arriba
let oferta = 29.9999999999;
console.log("oferta", Math.floor(oferta));

// ceil redondea para arriba
let vuelto = 0.1;
console.log("vuelto", Math.ceil(vuelto));

// round redondea al valor entero más cercano
let precio = 4.4999999999;
console.log("redondeo", Math.round(precio));

// toFiexed redondea según decimales
console.log("redondeo", precio.toFixed(2));

// random entrega valor aleatorio entre 0 y casi 1
let aleatorio = Math.random();
console.log("aleatorio", aleatorio);

// aleatorio entre x y y:  Math.random() * (y-x) + x
let entre20y50 = Math.random() * (50 - 20) + 20;
console.log("random entre 20 y 50", entre20y50);
