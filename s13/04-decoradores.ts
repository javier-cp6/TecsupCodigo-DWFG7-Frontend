// "influye"
// función que permite cambiar una clase
function decorador (nuevoNombre:string) {
    console.log("Yo soy el decorador")
    return function(target){
        // modifica la función presentarse
        target.prototype.presentarse = function(){
            console.log(`Buenas tardes ${nuevoNombre}`)
            target.vestimenta = ["vestido", "sombrero"]
            target.vestimenta.forEach((prenda) => console.log(prenda));
        }
    }
}
// el decorador debe ir encima de la clase y con @
@decorador("Nohemi Código")
class Persona {
    nombre:string
    vestimenta:Array<string>

    constructor(nombre, ropa){
        this.nombre = nombre
        this.vestimenta = ropa
    }
    presentarse():void{
        console.log(`Hola soy ${this.nombre}`);
        this.vestimenta.forEach((prenda) => {
            console.log(prenda)
        })
    }
}

let persona1 = new Persona("Nohemi", ["jeans", "blusa"])
persona1.presentarse()