// setTimeout(function() {
    
// }, 3000);


// javasctipt por defecto no espera para ejecutar las tareas
setTimeout(() => {
   console.log("1. pedido") 
}, 1000);
setTimeout(() => {
   console.log("2. preparación") 
}, 3000);
setTimeout(() => {
   console.log("3. pedido en camino") 
}, 5000);

console.log("4. entregado")

// problemática: cómo hacemos para que JS espere cuando las tareas demoran en ejeuctarse
// solución: event loop
// ver Loupe
