// Clase Object, método toString(), sobreescritura y polimorfismo en JS
//Clase padre
class Persona {
    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
    get nombre() {
      return this._nombre;
    }
  
    set apellido(apellido) {
      this._apellido = apellido;
    }
    get apellido() {
      return this._apellido;
    }
  
    //agregando método en una clase
    nombreCompleto() {
      return this._nombre + " " + this._apellido;
    }
  
    // Sobreescribiendo el método de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo (multimples formas en tiempo de ejecución)
        /*El método que se ejecuta depende si es una referencia de tipo 
        padre o de tipo hijo */
      return this.nombreCompleto();
    }
  }
  
  // Una clase hija
  class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
      super(nombre, apellido); // llamar al constructor de la clase padre
      this._departamento = departamento;
    }
  
    get departamento() {
      return this._departamento;
    }
    set departamento(departamento) {
      this._departamento = departamento;
    }
  
    //Sobreescritura
    nombreCompleto(){
      return super.nombreCompleto()+', '+this._departamento;
    }
  }

  //Clase padre
  let persona1 = new Persona();
  persona1._nombre="menk"
  persona1._apellido = "Menma"
  console.log(persona1.toString());
  
  //Utilizar el objeto de la clase hija
  let empleado1 = new Empleado("María", "Jimenez", "sistemas");
  console.log(empleado1);
  //Mostrando el concepto de sobreescritura
  console.log(empleado1.nombreCompleto());
  // Del método toString()
  console.log(empleado1.toString());