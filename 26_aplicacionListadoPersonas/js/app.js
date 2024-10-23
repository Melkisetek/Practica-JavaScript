const personas = [
  new Persona("Miguel", "Perez"),
  new Persona("Karla", "Lara"),
  new Persona("Anna", "Esparta"),
];

function mostrarPersonas() {
  console.log("Mostrar Personas...");
  let texto = "";

  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }

  document.getElementById("personas").innerHTML = texto;
}

// ------- Sin solución -------
// function evitarNumeros(){
//     let nombre = document.getElementById('nombre'),
//      apellido = document.getElementById('apellido');

//     if(nombre.value = !isNaN && apellido.value == !isNaN){
//     }
//     else{
//         alert('error')
//     }
// }

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "" ) {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    //Llamar de nuevo el método
  } else {
    alert("Ingrese nombre y apellido");
  }
}
