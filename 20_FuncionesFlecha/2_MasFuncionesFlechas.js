//Mas de funciones flechas
//funcion 1
const saludar = () =>{
   return 'saludos desde funcion flecha';
} 

console.log(saludar());

//Regresar objetos
const regresaObjeto = () => ({nombre: 'Menk',
                             apellido: 'Menma'});

console.log(regresaObjeto());

// funcion con parámetros 
const funcionConParametros = (mensaje) =>{
    console.log(mensaje);
}

funcionConParametros('funcion flecha con parámetros');