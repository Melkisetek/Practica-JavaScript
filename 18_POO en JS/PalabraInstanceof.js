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
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());

    //Preguntamos el tipo del objeto que estamos trabajando
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('Es un  tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object')
    }
}

let empleado1 = new Empleado('Marvin', 5000);

let gerente1 = new Gerente('Luis', 4500, 'Seguridad');
console.log(gerente1.obtenerDetalles());

// Polimorfismo
determinarTipo(empleado1);
determinarTipo(gerente1);