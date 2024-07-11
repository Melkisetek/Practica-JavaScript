//Funcion constructor de objetos de tipo persona
//Nota: Si es contructor de objetos, recomedado que los nombres empiecen con Mayusculas 
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Crear un objeto  que reciba el tipo persona del método
let padre = new Persona('Carlos', 'Bale', 'balecar@hotmail.com');
console.log(padre);

//Nuevo objeto 
let madre = new Persona('Marlin', 'Yoda', 'marlin23@gmail.com');
console.log(madre);