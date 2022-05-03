var manzana = "apple"

var manzana = "Manzana Peruanita"

console.log(manzana)

// let vs var
//var casi no tiene limitación de ambito/scope

for(let i = 0; i < 3; i ++){
    console.log("i:", i)
}
// console.log(`Iterador: ${i}`) 
// error dado que i está fuera del scope. let no lo permite

for(var x = 0; x < 3; x ++){
    console.log("x:", x)
}
console.log(`Iterador: ${x}`)
// var permite acceder a x a pesar que está fuera del scope.
// por ello var ya no se utiliza
