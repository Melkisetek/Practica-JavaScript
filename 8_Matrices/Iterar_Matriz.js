//Iterar una matriz
//Declar una matriz 
let matriz = [[200, 100, 150],[199, 77, 900, 120]];

//No. Renglones
console.log(matriz.length);
//No. Col (depende del renglon seleccionado)
console.log(matriz[0].length);
console.log(matriz[1].length);
//Renglones
for(let ren = 0; ren < matriz.length;ren++){
    //Columnas
    for(let col = 0; col < matriz[ren].length;col++){
        
        console.log(matriz[ren][col]);
    }

}

//while
let ren1 = 0;

while(ren1<matriz.length){
    let col = 0;
    
    while(col<matriz[ren1].length){
        console.log(matriz[ren1][col]);
        
      col++ 
    }

    ren1++
}
