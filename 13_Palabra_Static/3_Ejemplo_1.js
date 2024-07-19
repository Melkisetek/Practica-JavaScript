// Ejemplo de uso de la palabra Static en JS
class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;
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

  let persona1 = new Persona('Mario', 'Porta');
  console.log(persona1.toString());

  let empleado1 = new Empleado('Lucía', 'Otzil', 'Enfermero');
  console.log(empleado1.toString())