let btnModal = document.getElementById("btn-modal");

let exampleModal = document.getElementById("exampleModal");

console.log("btnModal", btnModal);
console.log("exampleModal", exampleModal);

let bsModal = new bootstrap.Modal(exampleModal);

console.log("bsModal", bsModal)

btnModal.addEventListener("click", function(){
    //más codigo
    bsModal.show()
})

//setTimeout(funcionAEjecutar, tiempo_en_ms)
//ejecuta una función después de X tiempo
window.setTimeout(function(){
    bsModal.show()
}, 5000)