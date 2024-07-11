//Distintas formas de imprimir un objeto en JS
let auto = {
    marca: 'Mazda',
    linea: 'CX-9',
    modelo: '2019',
    cilindra: ' cc 2500',
    traccion: '4x2'
}

//Concatenar cada valor de cada propiedad - forma No. 1
console.log(auto.marca+', '+auto.linea+', '+auto.modelo);

//for in - forma No. 2
for(fichaTecnica in auto){
    console.log(auto[fichaTecnica]);
}

//Object que regresa de menera de arrays - forma No. 3
let autoArrays = Object.values(auto);
console.log(autoArrays);

//objetos a cadenas - forma No. 4
let autoString = JSON.stringify(auto);
console.log(autoString);