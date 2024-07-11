//Funcion constructor de objeto de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //metodo
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

//Uso prototype - nuevo valor a todos lo objetos
Persona.prototype.tel = '34859223';
//Objeto 1
let padre = new Persona('Carlos', 'Arturo', 'artucarlo23@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());
console.log(padre.tel);

//Objeto 2
let madre = new Persona('Amalia', 'Aquino', 'aquino34@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.tel);