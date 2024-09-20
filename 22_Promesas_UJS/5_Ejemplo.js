//Poner en practica el uso de promesas, await, async y setTimeout
async function funcionConPromesasAwaitSetTimeout(){
    let miPromesa = new Promise(resolver =>{
        setTimeout(()=>resolver('Promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
    console.log('fina de la promesa'); 
}
//Llamar la función
funcionConPromesasAwaitSetTimeout();
