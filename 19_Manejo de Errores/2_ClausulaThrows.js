//Cláusula throws

'use strict';

let resultado = 2;

try {
   
    
    if(isNaN(resultado))throw 'No es un número';
    else if(resultado ===  '') throw 'Es cadena vacía';
    else if(resultado >= 0) throw 'Es positivo';
    else if(resultado < 0); throw 'Es negativo';
    
} catch (error) {
    console.log(error);
    // --- Dividir error en varias partes
    //console.log(error.name);
    //console.log(error.message);
}

//Siempre se ejecuta
finally{
    console.log('Terminamos la revisión de errores');
}