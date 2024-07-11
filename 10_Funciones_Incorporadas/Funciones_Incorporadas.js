//Funciones Incorporadas en JS
//Obtener el largo de una cadena
let cadena1 = 'hola';
console.log(`${cadena1.length}`);

//No podemos modificar una cadena en JS
//Las cadenas son inmutables
/*cadena1[0] = 'x';
console.log(cadena1[0]); */

//Si podemos asignar una nueva cadena 
cadena1 = 'Adios';
console.log(cadena1);

//Recorrer cada caracter
let i = 0;
while(i<cadena1.length){
    console.log(`${i}-${cadena1[i++]}`);
     
}

for(let i=0;i<cadena1.length;i++ ){
    console.log(cadena1[i])
}

i = 0;
do {
    console.log(cadena1[i++]);
    
} while (i<cadena1.length);