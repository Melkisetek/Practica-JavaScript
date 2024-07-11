//Paso por referencia JS
//Objetos (array) se pasan por referencia
function cambiarValor(parametro){
    parametro[0] = 20; 
}


//Llamar la función
let arreglo = [10];

console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues funcion: ${arreglo[0]}`);



//Ejemplo 2 objeto - apunta al mismo espacio de memoria
let animal = {
    nombre: 'Bobby', color: 'Red'
}

let dog = animal; //cambia el valor de ambos
//cambiar nombre
dog.nombre = 'Tommy'
console.log(animal);
console.log(dog);

//Ejemplo 2

//Declarar arreglo - renglon 1 de 5 columnas
let a = [1,3,4,5,6];
//array b apunta al array a
let b = a;

//Cambiar el valor de indice 0
a[0] = 100

//Imprimir
console.log(a);
console.log(b);