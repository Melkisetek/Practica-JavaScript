console.log('App calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'],
     operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    console.log(`Resultado: ${resultado}`);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    
}