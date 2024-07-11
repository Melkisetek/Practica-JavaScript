//-- Heredar métodos en JS 

//Clase padre
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

    //agregando método en una clase
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
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


//Utilizar el objeto de la clase hija
let empleado1 = new Empleado('María', 'Jimenez', 'sistemas');
console.log(empleado1)
//método heredado de la clase padre a hija
console.log(empleado1.nombreCompleto());