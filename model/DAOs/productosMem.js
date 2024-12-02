class ModelProductosMem {
    constructor() {
        this.productos = [
            { id: '1', nombre: 'TEG', categoria: 'estrategia', precio: 100.25, stock: 123 },
            { id: '2', nombre: 'Uno', categoria: 'cartas', precio: 50.00, stock: 77 },
            { id: '3', nombre: 'Harry Potter', categoria: 'rol', precio: 548.5, stock: 99 },
            { id: '4', nombre: 'Carrera de Mente', categoria: 'familiar', precio: 200.50, stock: 100 },
            { id: '5', nombre: 'Life', categoria: 'familiar', precio: 325.00, stock: 91 }
        ]
    }

    obtenerProductos = async () => this.productos

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1)  // ?. optional chaining
        producto.nombre = String(producto.nombre)
        producto.categoria = String(producto.categoria)
        producto.precio = parseFloat(producto.precio)
        producto.stock = parseInt(producto.stock)
        this.productos.push(producto)
        return producto    
    }

}

export default ModelProductosMem