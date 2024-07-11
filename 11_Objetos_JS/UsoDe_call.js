//Uso de call en JS
//Definir Objeto
let persona1 = {
    nombre: 'Juan',
    apellido: 'Max',
    //Método
    nombreCompleto: function(titulo, tel){ 
        return titulo+': '+this.nombre+' '+this.apellido+', '+tel}
};

//Objto 2
let persona2 = {
    nombre: 'Natalia',
    apellido: 'Joaquin'
};

//Uso de call para usar metodo 
//persona1.nombreCompleto con los datos de persona 2
console.log(persona1.nombreCompleto('Lic', '875858545'));
//Pasar Argumentos a call
console.log(persona1.nombreCompleto.call(persona2, 'Inga', 34343443));

//Uso de apply - Podemos utilizar un arreglo para pasar los valores
let array = ['Dr: ', '89346534'];
console.log(persona1.nombreCompleto.apply(persona2, array))