// Uso de promesas, seTimeout, Callback
let promesa = new Promise((resolver)=>{
    console.log('Inicio Promesa');
    setTimeout(()=>{resolver('Saludos con promesa y setTimeout')}, 3000);
    console.log('Fin promesa');

});

//Llamar nuestro objeto promesa
promesa.then(valor =>{console.log(valor);})
//Nota: Podemos utilizar paréntesis dentro de una función o lo podemos omitir