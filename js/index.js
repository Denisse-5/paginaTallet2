function bienvenida() {
    alert("¡Bienvenidas mujeres emprendedoras!");
    confirmacion();
}

function confirmacion() {
    var r = confirm("¿Deseas saber acerca de autonomía económica de las mujeres?");
    if (r == true) {
        var nombre = prompt("¿Cuál es tu nombre?");
        document.getElementById('mostrar_mensaje').innerHTML = `Hola ${nombre} te invitamos a desarrollar tu autonomía económica`;
    }
}

const actual = new Date();
let fecha = actual.toLocaleDateString();
let hora = actual.toLocaleTimeString('es-MX', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

document.getElementById("fecha").innerHTML = fecha;
document.getElementById("hora").innerHTML = hora;

const formulario = document.querySelector('#formulario');
const listaCatalogo = document.querySelector('#lista-catalogo');
let catalogo = [];
let productos = [];
let departamentos = [];
let costos = [];


eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarProducto);
}

function agregarProducto(e) {
    e.preventDefault();
    var producto = document.querySelector('#producto').value,
        departamento = document.querySelector('#departamento').value,
        costo = document.querySelector('#costo').value;
    if (producto === '' || costo === '' || departamento === '') {
        alert("Todos los campos son obligatorios");
        return;
    }
    const catalogoObjeto = {
        id: Date.now(),
        producto,
        departamento,
        costo
    }

    catalogo = [...catalogo, catalogoObjeto];
    productos = [...productos, catalogoObjeto.producto];
    departamentos = [...departamentos, catalogoObjeto.departamento];
    costos = [...costos, catalogoObjeto.costo];

    console.log(catalogo);
    console.log(productos);
    console.log(departamentos);
    console.log(costos);


    listaProductos();
}

function listaProductos() {

    if (productos.length > 0) {
        var i;
        for (i = 0; i < productos.length; i++) {
            console.log(productos[i]);

        }
    }
}