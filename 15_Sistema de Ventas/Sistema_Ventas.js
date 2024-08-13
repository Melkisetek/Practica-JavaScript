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
        return `\n{idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: Q${this._precio} } `
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
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); //push() se Utiliza para agregar uno o más elementos al final de un array.  
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log(`No se pueden agregar más productos: ${Orden.MAX_PRODUCTOS}`)
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString()+' ';
        }

        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, 
            Productos: ${productosOrden}`);
    }


}



let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('camisa', 12);
let producto3 = new Producto('Calzon', 89);
let producto4 = new Producto('Calzoncillo', 35);
let producto5 = new Producto('Calzoncillo', 88);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3)
orden2.mostrarOrden();