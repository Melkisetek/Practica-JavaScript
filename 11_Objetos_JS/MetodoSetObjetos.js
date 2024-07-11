//Método set en objetos en JS
let persona = {
  nombre: "Carlos",
  apellido: "Ruiz",
  edad: 24,
  idioma: "es_gt",
  //modificar un valor
  set lang1(lang) {
    this.idioma = lang.toUpperCase();
  },
  get lang() {
    return this.idioma.toUpperCase(); //convierte a mayuscula
  },
};

console.log(persona.lang);
//Nuevo valor
persona.lang1 = "en";
console.log(persona.lang);
console.log(persona.idioma);
