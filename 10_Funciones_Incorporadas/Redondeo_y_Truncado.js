//Redondeo y Truncado en JS
let numero = 8.556, redondeo, truncado, aproximar;
//Redondeo
//Math.round() redondea el valor entero mas cercano
//.5 o superior, redondea al valor entero superior mas cercano
redondeo = Math.round(numero);
console.log(`${redondeo}`);

//Truncado
//Math.trunc elimina la parte flotante (decimal)
truncado = Math.trunc(numero);
console.log(`${truncado}`);

//Rendear con dos decimales - toFixed(x). Se utiliza para redondear un número decimal a posiciones decimales específicas.  
aproximar = numero.toFixed(2)
console.log(aproximar);
