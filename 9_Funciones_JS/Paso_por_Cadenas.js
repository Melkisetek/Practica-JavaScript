//Cadenas y funciones en JS
//Cadenas inmutables en JS (no se puede modificar su valor) tipos primitivos
function cambiarValor(parametro){
    parametro = 'Adios';
}

//Llamar a la funcion
let argumento = 'Hola';
console.log(`Antes funcion: ${argumento}`);
cambiarValor(argumento);
console.log(`Despues funcion: ${argumento}`);

