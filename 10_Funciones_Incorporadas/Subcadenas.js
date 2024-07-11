//Subcadenas en JS - 
/**
 * Básicamente una subcadena es un extracto
 * de caracteres de la cadena original
 */
let cadena3 = "Hola mundo";
//substring(indice_incio, indice_fin-1)
//No se incluye el caracter indice_fin
let cadena1 = cadena3.substring(0, 4);
console.log(cadena1);
//subcadena mundo
cadena1 = cadena3.substring(5,10);
console.log(cadena1);