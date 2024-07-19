// Atributos estáticos en JS
//Clase padre
class Persona {
     //Atributo estático
     static contadorObjetosPersona = 0;

    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
      Persona.contadorObjetosPersona++;
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

    static saludar(){
        console.log(`saludo desde método static`);
    }

    static saludar2(persona){
        console.log(persona.nombre);
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
  //Objeto de la clase padre
  let persona1 = new Persona('Carlos', 'Enrique');
  //Objeto de la clase hijo
  let empleado1 = new Empleado('Marvin','Diaz', 'Inge');
  console.log(empleado1)

  //mandar a llamar 
  console.log(Persona.contadorObjetosPersona);
  