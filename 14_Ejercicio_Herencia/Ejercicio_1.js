//Aplicar conceptos de herencia, polimorfismo.
class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersonas = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersonas(){
        return this._idPersonas;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return  this._apellido;
    }
 

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }
    
    //toString
    toString(){
        return this._nombre+' '+this._apellido+' '+this._edad;
    }

}

//clase empleado
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

     get idEmpleado(){
       return this._idEmpleado;
     }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
        
        
    }

    toString(){
        return this._idEmpleado+' '+super.toString()+' '+this._sueldo;
    }
}

//clase Cliente
class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorCliente;
        this._fechRegistro = new Date();
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechRegistro = fechaRegistro;
    }

    toString(){
        return this._idCliente+' '+super.toString()+' '+this._fechRegistro;
    }
}

let empleado1 = new Empleado('carlos', 'Mora', 23, 1500);
console.log(empleado1.toString());

let empleado2 = new Empleado('Mario', 'Ozil', 33, 6000);
console.log(empleado2.toString());

//cliente
let cliente1 = new Cliente('Ana', 'Perreira', 44 );
console.log(cliente1.toString()) 

let cliente2 = new Cliente('Manuel', 'Esparta', 25 );
console.log(cliente2.toString())