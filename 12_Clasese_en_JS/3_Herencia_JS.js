//------ Herencia en JS
//Crear una clase Padre
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    get apellido(){
        return this._apellido;
    }
}

// Una clase hija 
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}
//Objeto de la clase padre
let persona1 = new Persona('Mario', 'Mejia');
console.log(persona1);

//Utilizar el objeto de la clase hija
let empleado1 = new Empleado('María', 'Jimenez', 'sistemas');
console.log(empleado1)