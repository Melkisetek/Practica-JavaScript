//Agregar y Eliminar Propiedades en JS
let persona = {
    nombre: 'Juan',
    apellido: 'Ochoa',
    edad: 23,
    direccion: 'Guatemala city',
    datosPersonales: function(){
        return this.nombre+', '+this.apellido+', '+this.edad;
    }
}

//Agregar nueva propiedad a objeto persona
persona.tel = '34589932';
//Modificar 
persona.tel = '23488944';
console.log(persona);
//eliminar propiedades
delete persona.tel;
console.log(persona);