const ingresos = [
    new Ingresos('Salario',5000),
    new Ingresos('Venta Casa', 15000)
];

const egresos = [
    new Egresos('departamento', 1200),
    new Egresos('Ropa', 400)
];

// --- Llamar la función en documento html, para mostrar los datos --- 
let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
}


let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

//"minimumFractionDigits" Minimo de digitos de centavos.
//"style" Estilos tenemos varias opciónes, en el ejemplo queremos dar formato de moneda.
//"currency" Agregar el tipo de moneda que se va utilizar 
const formatoMoneda = (valor)=>{
   return valor.toLocaleString('es-GT', {style:'currency', 
        currency:'GTQ', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-GT', {style:'percent', minimumFractionDigits: 2});
}

//Ingresos
const cargarIngresos = ()=>{
    let ingresosHTML = '';
    /* Declarar variable "ingreso" que va almacenar cada uno de los elementos
     de tipo ingreso que tengamos en nuestro arreglo y específicamos 
     el arreglo de "ingresos"*
    */
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

crearIngresoHTML = (ingreso)=>{
    //Va generar un elemento de ingreso
    let ingresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <!--El nombre del icono de eliminar--> 
                <ion-icon name="trash-outline"
                onclick='eliminarIngreso(${ingreso.id})' title="Eliminar"></ion-icon>
            </button>
        </div>
    </div>
</div>`;

    return ingresoHTML;
}

//Método eliminar, recibe un id
const eliminarIngreso = (id)=>{
    // Con cada objeto que tenga el arreglo, estamos haciendo una comparación 
    let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.id === id);

    ingresos.splice(indiceEliminar, 1);
    //Volver a cargar el cabecero y el listado de ingresos
    cargarCabecero();
    cargarIngresos();

}

// Egresos
const cargarEgresos = ()=>{
    let egresosHTML = '';

    for( let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}


let crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="trash-outline"
                                onclick='eliminarEgreso(${egreso.id})' title="Eliminar"></ion-icon>
                            </button>
                        </div>
                    </div>
    </div>`;

    return egresoHTML; 
}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    
    cargarCabecero();
    cargarEgresos();

}