//Funciones CallBack en JS
function mifuncion1 (){
    console.log('funcion 1');
}

  function mifuncion2(){
    console.log('funcion 2');
}

mifuncion2();
mifuncion1()

// Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){ //Este parámetro esta apuntando a una función
    let res = op1+op2;
    funcionCallback(res);
}

sumar(3,5,imprimir);