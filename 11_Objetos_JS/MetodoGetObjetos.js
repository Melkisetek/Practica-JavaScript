//Método get en objetos en JS
let motocicleta = {
  marca: "Yamaha",
  linea: "MT-09 SP",
  modelo: "2020",
  cilindrada: "900",
  hp: 125,
  //Otra forma de crear un metodo o funcion
  get metodoMoto() {
    return this.marca + ", " + this.linea + ", " + this.modelo;
  }, rin: '17'
};
//forma simplificada
console.log(motocicleta.metodoMoto);

