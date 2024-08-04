//Sistemas de Ventas
class Producto{
    static contadorProducto = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, 
                nombre: ${this._nombre}, 
                precio: Q${this._precio} `
    }
} 

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('camisa', 12);

console.log(producto1.toString());
console.log(producto2.toString());