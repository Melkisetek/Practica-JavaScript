//clase empleado
class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}
    get sueldo(){return this._sueldo;}
    set sueldo(sueldo){this._sueldo = sueldo;}

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

//clase gerente
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento
    }

    //sobreescritura    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this._departamento}`;
    }
}

//Método imprimir
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Marvin', 5000);

let gerente1 = new Gerente('Luis', 4500, 'Seguridad');
console.log(gerente1.obtenerDetalles());

// Polimorfismo
imprimir(empleado1);
imprimir(gerente1);