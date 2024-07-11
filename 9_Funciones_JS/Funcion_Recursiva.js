//Funciones recursivas
//Imprimir 3,2,1
function funcionRecursiva(numero){ /*Debe ser positivo */
    //Caso Base
    if(numero==2){
        console.log(numero);
    }
    else{
        console.log(numero);
        funcionRecursiva(numero-1);
    }
}

//Llamamos la funcion recursiva
funcionRecursiva(7)