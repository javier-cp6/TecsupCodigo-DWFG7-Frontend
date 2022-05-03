//thruthy - falsy

let teQuiere = true
// no es requerido evaluar utilizando un operador lógico
if(teQuiere) {
    console.log("Es verdadero")
}

let valor
// si el valor es undefined o null, se considera falso
if(valor) {
    console.log("Está definido")
} else {
    console.log("No está definido")
}

// operador ternario

// valor condicional ? si_es_verdadero : si_es_false
valor ? console.log("OT - Sí está definido") : console.log("OT - No está definido")