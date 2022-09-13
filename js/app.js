
//Variables filtros
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max -10;

// Objeto con los parametros de busqueda
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}
 

document.addEventListener('DOMContentLoaded',()=> {
    mostrarDatos(autos);

    // llena las opciones de a;os
    llenarSelect();
})
//Event Listener para los select de busqueda

marca.addEventListener('change',e=> {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
  
});

year.addEventListener('change',e=> {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change',e=> {
    datosBusqueda.minimo= e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change',e=> {
    datosBusqueda.maximo= e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change',e=> {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});


transmision.addEventListener('change',e=> {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});


color.addEventListener('change',e=> {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});





//FUNCIONES
function mostrarDatos(autos){
    limpiarHtmlAutos(); //Limpia los autos cargados para cuando se agrega filtro
    autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
        Marca: ${marca} -
        Modelo: ${modelo} - 
        Año:${year} -
        Precio: $ ${precio} -
        Puertas: ${puertas}  -
        Color: ${color} -
        Transmision: ${transmision} `;

        //insertamos en el html
        resultado.appendChild(autoHtml);
    });
}


function llenarSelect()
{
    for(let i = max; i>min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de a;o al select
    }
}


//Limpiar html
function limpiarHtmlAutos(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    mostrarDatos(resultado);
}

function filtrarMarca(auto)
{
    
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}



function filtrarYear(auto)
{
    
    if(datosBusqueda.year){
        return parseInt(auto.year) === parseInt(datosBusqueda.year);
    }
    return auto;
}
 

function filtrarMinimo(auto)
{
    
    if(datosBusqueda.minimo){
        return parseInt(auto.precio) >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}
 

function filtrarMaximo(auto)
{
    
    if(datosBusqueda.maximo){
        return parseInt(auto.precio) <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}
 

function filtrarPuertas(auto)
{
    
    if(datosBusqueda.puertas){
        return parseInt(auto.puertas) === parseInt(datosBusqueda.puertas);
    }
    return auto;
}
 

function filtrarTransmision(auto)
{
    
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
 

function filtrarColor(auto)
{
    
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}
 