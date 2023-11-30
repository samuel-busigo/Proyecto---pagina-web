const carrito = document.getElementById('carrito'),
      listaProductos = document.getElementById('lista_de_productos'),
      contenedorCarrito = document.querySelector('.carrito_compra_content .lista__productos'),
      vaciarCarritoButton = document.querySelector('#vaciar__carrito'),
      comprarCarritoButton = document.querySelector('#comprar__carrito');

let productosCarrito = [];

registrarEventsCarrito() 

function registrarEventsCarrito() {
    //Cuando den click agregar al carrito de compra
    listaProductos.addEventListener('click', agregarProducto);


    //eliminar producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    //vaciar carrito
    vaciarCarritoButton.addEventListener('click', e => {
        productosCarrito = [];
        limpiarHtml()
        alert("El carrito ahora está vacío")
    })

    //opcion de comprar
    comprarCarritoButton.addEventListener('click', e => {
        productosCarrito = [];
        limpiarHtml()
        alert("¡Gracias por su compra! su pedido está en proceso...")
    })
}

function agregarProducto(e) {
    if (e.target.classList.contains("button__carrito")) {
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerInfo(productoSeleccionado)
    }
}
//eliminar producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains("borrar__producto")) {
        const productoId = e.target.getAttribute('data-id');

        //eliminar del arreglo del productosCarrito por el data-id
        productosCarrito = productosCarrito.filter(producto => producto.id !== productoId)

        carritoHtml()
    }
}
//leer contenido del index.html al cual se le dio click y tomar de ahi la informacion del producto
function leerInfo(producto) {
    //creacion de un objeto con el contenido del producto
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        nombre : producto.querySelector('h4').textContent,
        precio : producto.querySelector('p').textContent,
        id : producto.querySelector('.button__carrito').getAttribute('data-id'),
        cantidad : 1 
    }

    //revisar si un elemento ya esta en el carrito
    const existe = productosCarrito.some(producto => producto.id === infoProducto.id)

    if (existe) {
        //se actualiza la cantidad
        const productos = productosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return productos
            } else {
                return productos;
            }
        });
        [...productosCarrito,infoProducto]
    } else {
        //agregamos productos al carrito
        productosCarrito = [...productosCarrito, infoProducto]
    }
    carritoHtml()
}

//muestra del producto en el carrito

function carritoHtml() {
    //recorrer carrito de compras y generar el HTML
    productosCarrito.forEach(producto => {
        const fila = document.createElement('div');
        fila.innerHTML = `
            <img src="${producto.imagen}"></img>
            <p>${producto.nombre}</p>
            <P>${producto.precio}</p>
            <P>${producto.cantidad}</p>
            <P><span class="borrar__producto" data-id="${producto.id}">X</span></p>
        `;

        contenedorCarrito.appendChild(fila)
    });
}

//elimina los productos del carrito

function limpiarHtml() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}