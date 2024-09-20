//  Palabra await y async con promesas
//async Indica que una función regresa una promesa.
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor =>{console.log(valor)})

//------------------ async/await ----------------
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(valor =>{
        valor('Promesa con await');
    });

    console.log(await miPromesa);
}

//Mandar a ejecutar la función
funcionConPromesaYAwait();