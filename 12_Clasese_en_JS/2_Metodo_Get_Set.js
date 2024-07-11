//Nota: No es posible crear objetos antes   de declarar la clase.
//No se aplica el concepto de hoisting
//Método Get y Set en JS
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
   
    
    get nombre(){
        return this._nombre+' '+this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Amalia', 'Max');
//Modificar nombre
persona1.nombre = 'Juan'; // set nombre
//escribimos persona1 con punto para acceder a nombre del metodo get
console.log(persona1.nombre); // get nombre
console.log(persona1._apellido)

//Objeto 2
let persona2 = new Persona('Rafael', 'Garcia');
console.log(`${persona2.nombre}`)