// class 1
class Animal {
    Nombre
    Edad
    Familia
    Tamanio

    constructor(nombre, edad, familia, tamanio) {
        this.Nombre = nombre
        this.Edad = edad
        this.Familia = familia
        this.Tamanio = tamanio
    }
    // método dentro de objeto
    correr(velocidad){
        console.log(`${this.Nombre} corre a ${velocidad} m/s`)
    }
}

let panda = new Animal("Panda", 20, "Mamíferos", "Muy grande")
console.log(panda)

// class 2

// nombre, tamanio, edad, familia, SALTAR
// con extends se heredan las propiedades de una clase mayor
class Roedor extends Animal {
    constructor(nombre, edad, familia, tamanio, salto){
        // super permite acceder al constructor de la  *clase padre*
        // !! debe respetarse el orden de los parámetros del constructor de la clase padre (Animal)
        super(nombre, edad, familia, tamanio)
        this.Salto = salto

    }
}
let bugs = new Roedor("Bugs Bunny", 10, "Lepóridos", "Pequeño", 40 )
console.log(bugs)

// class 3
class Mamífero extends Roedor {
    constructor(nombre, edad, familia, tamanio, salto, mastica){
        // recordar que super permite acceder al constructor de la  *clase padre* (Animal)
        super(nombre, edad, familia, tamanio, salto)
        this.Mastica = mastica
    }

}
let lola = new Mamífero("Lola", 10, "Lepóridos", "Pequeño", 50, "mucho")

// En programación orientada a objetos no debería permiterse lo siguiente (debería ser con métodos (constructor), pero JS lo permite):
lola.pelaje = "Beige"
lola.Nombre = "Lolita"

console.log(lola)