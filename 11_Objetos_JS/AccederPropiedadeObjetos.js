//Acceder a las propiedades de los objetos en JS
//Declarar objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Ochoa',
    edad: 23,
    direccion: 'Guatemala city',
    datosPersonales: function(){
        return this.nombre+', '+this.apellido+', '+this.edad;
    }
}

//Llamar el objeto 
console.log(persona.nombre);
console.log(persona.datosPersonales());
//Forma 2 de acceder a las propiedades de objetos
console.log(persona['apellido']);


//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);

}
