//Aplicar conceptos de herencia, polimorfismo.
class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersonas = ++ Persona.contadorPersonas;
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
        return `${this._idPersonas}
                 ${this._nombre} 
                 ${this._apellido} 
                 ${this._edad}`;
    }

}

//clase empleado
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
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
        return `${super.toString()} 
                ${this._idEmpleado}
                ${this._sueldo}`;
    }
}

//clase Cliente
class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}

//Prueba clase Persona
let persona1 = new Persona('Juan', 'Perez', 34);
console.log(persona1.toString());

let empleado1 = new Empleado('Moises', 'Hernandez', 36, 6800);
console.log(empleado1.toString());

//Cliente
let cliente1 = new Cliente('Raul', 'Quiñonez', 45, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Marisol', 'Mora', 23, new Date());
console.log(cliente2.toString());