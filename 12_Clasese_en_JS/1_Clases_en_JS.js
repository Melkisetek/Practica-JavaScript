//Clases en JavaScript
//Crear clase
class Persona {
  //crear constructor con parametros
  constructor(nombre, apellido) {
    //Crear nombre del atributo = nombre del parametro
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
//Definida la clase podemos crear objetos
 let persona1 = new Persona('Carlos', 'Montiel');
 console.log(persona1);
 //Crear segundo objeto
 let persona2 = new Persona('Lisa', 'Montes');
 console.log(persona2);
