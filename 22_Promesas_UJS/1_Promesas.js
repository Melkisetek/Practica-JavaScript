//Promesas en JS
let miPromesa = new Promise((resolver, rechazar) =>{
    let expresion = false;
    if(expresion){
        resolver('Es Correcto');
    }
    else{
        rechazar('Se produjo un error');
    }
});

//Llamar la funcion promesa 
//miPromesa.then(valor =>{console.log(valor)}, error =>{console.log(error)});
//Forma 2
miPromesa
.then(valor=>{console.log(valor)})
.catch(error=>{console.log(error)});