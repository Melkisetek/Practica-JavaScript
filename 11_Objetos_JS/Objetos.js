//Declarar un objeto en JS
let persona = {
    nombre: 'Juan',
    apellido: 'Juarez',
    email: 'jmorales@gmail.com  ',
    edad: 30,
    fechaNacimiento: '12/03/1992 ',
    
    //Agregar métodos a objetos
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
};

//Mostrar las propiedades o atributos del objeto
console.log(persona.nombre);
console.log(persona.fechaNacimiento);
//llamar método definido dentro de un objeto
console.log(persona.nombreCompleto());
console.log(persona);

//Método 2 para crear un objeto
let persona2 = new Object();
persona2.nombre = 'rvin';
persona2.apellido ='Montiel';
persona2.direccion = 'Guatemala city';
persona2.telefono =78348923;

console.log(persona2.nombre);
console.log(persona2.direccion);