//Alcance de Variables en JS
let variableGlobal = 5;

//Modificar el valor
variableGlobal = 11;

//Definicion funcion
function miFuncion(variableLocal){ /*Se pasa una copia, y no la referencia */
    console.log(variableLocal);
    //Modificamos la variable global
    variableGlobal = 21; // si, no se define si var o let. Entonces es una variables global
    //No podemos redefinir una variable global (let)

}

//Llamamos la funcion
miFuncion(variableGlobal);

