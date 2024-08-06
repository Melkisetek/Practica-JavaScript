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

//Clase Orden
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log(`No se pueden agregar más productos: ${Orden.MAX_PRODUCTOS}`)
        }
    }

    calcularTotal(){
        
    }

}



let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('camisa', 12);

console.log(producto1.toString());
console.log(producto2.toString());