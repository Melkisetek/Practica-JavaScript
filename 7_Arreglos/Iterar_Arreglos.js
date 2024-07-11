//Iterar arreglos en JS
let numerosArreglos = [23, 9, 0, 34, 4, 67];

//Leer valores con ciclos
for(let i = 0; i<numerosArreglos.length; i++){
    console.log(`Arreglo[${i}] = ${numerosArreglos[i]}`);
}

//while
let nu = 0;
while(nu<numerosArreglos.length){
    console.log(numerosArreglos[nu]);
    nu++;
}

//do-while
let nu2 = 0;
do {
    
    console.log(numerosArreglos[nu2]);
    nu2++;
    
} while (nu2<numerosArreglos.length);
