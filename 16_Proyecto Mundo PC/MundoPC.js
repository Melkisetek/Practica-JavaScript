class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }
     
    toString(){
        return `Raton: [idRaton: ${this._idRaton},
                TipoEntrada: ${this._tipoEntrada},
                marca: ${this._marca}]
                 `;
    }
    
}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('USB', 'HP');
raton2.marca = 'Lenovo'; 
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado},
                tipoEntrada: ${this._tipoEntrada},
                marca: ${this._marca}]`;
    }

}

let teclado1 = new Teclado('Bluetooth', 'Dell');
console.log(teclado1.toString());
let teclado2 = new Teclado('USB', 'MSI');
console.log(teclado2.toString());

class Monitor{
    static contadorMonitores = 0; 
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor},
               Marca: ${this._marca},
               Tamaño: ${this._tamaño}]`
    }
}

let monitor1 = new Monitor('HP', 14);
console.log(monitor1.toString());
let monitor2 = new Monitor('Dell', 32);
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;
    //Utilizar concepto relación de agregación
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        
    }

    get idComputadora(){
        return this._idComputadora;
    }

    toString(){
        //esto esta apuntando a un objeto de las clases se manda a llamar el método toString()
        return `Computadora [ idComputadora: ${this._idComputadora}:
                            ${this._nombre},
                            \n${this._monitor},
                            \n${this._teclado},
                            \n${this._raton}]`
    }
}

let computadora1 = new Computadora('Dell', monitor1, teclado1, raton1); //recibe una referencia de cada una de los objetos monitor, raton, teclado
console.log(computadora1.toString());
let computadora2 = new Computadora('PC',monitor2,teclado2,raton2 );
//forma 2 templey String
//console.log(`${computadora1}`)

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras[this._contadorProductosAgregados++] = computadora; //le pasamos una referencia y se esta asignando a un nuevo indice de computadoras
        //this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        //Cual es el arreglo que queremos iterar 
        for(let computadora of this._computadoras){
            computadorasOrden = computadorasOrden+`\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`); //computadoraOrden tiene todos los objetos de tipo computadora
    }

}

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden1.mostrarOrden();
orden2.mostrarOrden();

