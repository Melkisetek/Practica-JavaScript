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

// Llamadas asícronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 seg.')
}

setTimeout(miFuncionCallback,3000); //Después de 3 seg

setTimeout(function(){console.log('saludo asíncrono 2')}, 4000);

setTimeout(()=>{console.log('saludo asíncrono 3')}, 5000);