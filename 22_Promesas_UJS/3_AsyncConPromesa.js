// Uso de la palabra Async
// Uso de promesas, seTimeout, Callback, Async
let promesa = new Promise((resolver)=>{
   
    setTimeout(()=>{resolver('Saludos con promesa y setTimeout')}, 3000);


});

//Llamar nuestro objeto promesa
//promesa.then(valor =>{console.log(valor);})

//async Indica que una función regresa una promesa.
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor =>{console.log(valor)})