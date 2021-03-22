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

function tiempo() {
    const actual = new Date();
    let fecha = actual.toLocaleDateString();
    let hora = actual.toLocaleTimeString('es-MX', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("hora").innerHTML = hora;
}
tiempo();
var actualizarHora = setInterval(tiempo, 1000);

class Producto {
    constructor(imagen, nombre, precio, descripcion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

class Carrito {
    constructor(nombreCarrito, precioCarrito) {
        this.nombreCarrito = nombreCarrito;
        this.precioCarrito = precioCarrito;
    }
}

class UI {
    agregarProductoCarta(producto) {
        const productoCarta = document.getElementById('contenedor-cartas');
        const elementoCarta = document.createElement('DIV');
        elementoCarta.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}"> 
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <p>${producto.descripcion}</p>
            <p><button name="carrito">Agregar al carrito</button></p>
        </div>
        `;
        productoCarta.appendChild(elementoCarta);
    }

    agregarAlCarrito(elementoCarta) {
        if (elementoCarta.name === 'carrito') {
            const nombreCarrito = elementoCarta.parentElement.parentElement.querySelector("h3").textContent;
            const precioCarrito = elementoCarta.parentElement.parentElement.querySelector("p").textContent;
            const carrito = new Carrito(nombreCarrito, precioCarrito);
            console.log(carrito);
            const botones = document.getElementById("botones-carrito");
            const elementoCarrito = document.createElement('TR');
            elementoCarrito.innerHTML = `
                <td>imagen</td>
                <td>${carrito.nombreCarrito}</td>
                <td>${carrito.precioCarrito}</td>
                <td><a href="#"><img name="eliminar" class="basurero" src="../img/tugurio.svg" alt="basurero"></a></td>           
            `;
            botones.insertAdjacentElement("beforebegin", elementoCarrito);
        }
    }

    eliminarProductoCarrito(elementoCarrito) {
        if (elementoCarrito.name === "eliminar") {
            elementoCarrito.parentElement.parentElement.parentElement.remove();
        }
    }

    vaciarCarrito(elementoCarrito) {
        if (elementoCarrito.name === "vaciar") {
            const elementosCarrito = elementoCarrito.parentElement.parentElement.parentElement;
            const t = elementosCarrito.children.length;
            if (t > 2) {
                console.log("borrando");
                for (let i = 2; i < t; i++) {
                    elementosCarrito.removeChild(elementosCarrito.children[1]);
                }
            }
        }
    }

}

document.getElementById('formulario-producto')
    .addEventListener('submit', function(e) {
        const imagen = document.getElementById('imagen').value;
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const descripcion = document.getElementById('descripcion').value;
        console.log(imagen, nombre, precio, descripcion);
        const producto = new Producto(imagen, nombre, precio, descripcion);
        // Validación de formularios
        if (imagen === '' || nombre === '' || precio === '' || descripcion === '') {
            alert("Todos los campos son obligatorios");
            return;
        }
        const ui = new UI();
        ui.agregarProductoCarta(producto);
        e.preventDefault();
    });

document.getElementById('contenedor-cartas')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.agregarAlCarrito(e.target);
        e.preventDefault();
    });

document.getElementById('contenedor-carrito')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.eliminarProductoCarrito(e.target);
        e.preventDefault();
    });

document.getElementById('contenedor-carrito')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.vaciarCarrito(e.target);
        e.preventDefault();
    });
