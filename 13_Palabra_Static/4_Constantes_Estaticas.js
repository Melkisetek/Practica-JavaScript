//Creacion de constantes estaticas en JS
class Persona{
    static contadorPersonas = 0;
    
    //simular un valor como constante
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("Se han superado el máximo de objetos permitidos");
        }
    }

    


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }


    toString(){
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

  // un máximo de 5 objetos 
  let persona1 = new Persona('Marvin', 'Carvajal');
  let persona2 = new Persona('Alicia', 'Max');
  let persona3 = new Persona('Kevin', 'Mikt');
  let persona4 = new Persona('Laura', 'Ochoa');
  let persona5 = new Persona('Dani', 'Ceballos');
  
  console.log(persona5.toString());