/*Realizar la suma de los primeros 5 números
utilizando el ciclo for: */
let suma = 0, valor = 5;

for(let i = 1;i<=valor;i++){
    //Imprimir lo que va a sumar
    console.log(`${suma}+${i}`);
    //Suma parcial
    suma+=i;
    console.log(`${suma}`)
}
console.log(`La suma de los primeros 5 números es: ${suma}`);
