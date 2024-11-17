let mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    //Fecha
    const meses = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep',
     'Oct', 'Nov', 'Dic'];
     const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
     let diaSemana = dias[fecha.getDay()];
     let dia = fecha.getDate();
     let mes = meses[fecha.getMonth()];
     let año = fecha.getFullYear();
     let fechaTexto = `${diaSemana}, ${dia} ${mes} de ${año}`;
     document.getElementById('fecha').innerHTML = fechaTexto;

     // classList: Regresa una lista con todas las clases que se estan aplicando, al elemento html.
     /* ClassListtoggle():Este método permite añadir o quitar una clase de un elemento de 
        manera sencilla, dependiendo de si la clase ya está presente o no.*/
     document.getElementById('contenedor').classList.toggle('animar');
}

//Formato a la hora
const formatoHora = (hora)=>{
    if(hora<10){
        hora = '0'+hora;
    
    }

    return hora;
}

setInterval(mostrarReloj, 1000);