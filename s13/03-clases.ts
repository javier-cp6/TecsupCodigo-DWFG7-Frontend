interface iHamburguesa {
    id:number,
    nombre:string,
    precio:number,
    ingredientes:Array<string>,
    preparacion:string
}

class Anvorguesa implements iHamburguesa {
    // propiedades públicas y privadas
    id;
    nombre;
    precio;
    ingredientes;
    preparacion;
    // una propiedad privada no es accesible
    // es necesario indicar una propiedad privada con _
    private _costo;

    constructor(id, nombre, precio){
        this.id = id; //*
        this.nombre = nombre; //*
        this.precio = precio; //*
        this.ingredientes = [];
        this.preparacion = "";
        this._costo = 90;
    }

    // getters y setters t=> obtenedores y configuradores
    // getter
    get obtenerCosto(){
        // validaciones, código extra
        return this._costo
    }
    // setter (funciona como una propiedad, no como función)
    set actualizarCosto(nuevoCosto){
        // código extra
        this._costo = nuevoCosto
    }
}

let Cangreburguer = new Anvorguesa(1, "CANGREBurguer", 12)


console.log(Cangreburguer)
console.log(Cangreburguer.obtenerCosto)
// Cangreburguer.actualizarCosto = 20
// console.log(Cangreburguer)


// para cambiar la versión de Ecmascript al transpilar
// tsc nombrearchivo.ts --target ES6