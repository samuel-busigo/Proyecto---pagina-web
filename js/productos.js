let productos = [
    {
        id: 1,
        nombre: "Camiseta gris",
        imagen: "camiseta_cuello_en_V.jpg",
        precio: 54.000,
    }
];

function agregarProductoCarrito(idProducto) {
    let carritoCompras = document.querySelector("#productos-carrito");
    let nombreProducto "";
    let precioProducto "";

    productos.forEach(producto => {
        if(producto.id === idProducto){
            nombreProducto = producto.nombre;
            precioProducto = producto.precio;
        }
    });

    let newProductoCarrito = document.createElement("p");
    newProductoCarrito.innerHTML = `Nombre del producto: ${nombreProducto} <br>Precio: $${precioProducto}`;
    carritoCompras.appendChild(newProductoCarrito);
}