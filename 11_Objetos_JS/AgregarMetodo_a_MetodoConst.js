//Agregar Método a un Método Contructor de Objetos en JS
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Método
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
    
}

//Crear un objeto  que reciba el tipo persona del método
let padre = new Persona('Carlos', 'Bale', 'balecar@hotmail.com');
console.log(padre);
//Ingresar al metodo dentro del objeto construcor
console.log(padre.nombreCompleto());
//Nuevo objeto 
let madre = new Persona('Marlin', 'Yoda', 'marlin23@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

