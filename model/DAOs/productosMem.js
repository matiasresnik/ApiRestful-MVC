class ModelProductosMem {
    static ultimoId=5;
    constructor() {
        this.productos = [
            { id: '1', nombre: 'TEG', categoria: 'estrategia', precio: 100.25, stock: 123 },
            { id: '2', nombre: 'Uno', categoria: 'cartas', precio: 50.00, stock: 77 },
            { id: '3', nombre: 'Harry Potter', categoria: 'rol', precio: 548.5, stock: 99 },
            { id: '4', nombre: 'Carrera de Mente', categoria: 'familiar', precio: 200.50, stock: 100 },
            { id: '5', nombre: 'Life', categoria: 'familiar', precio: 325.00, stock: 91 }
        ]
    }
    static obtenerUlitmoID(){
        return this.ultimoId
    }
    static incrementarUlitmoID(){
        this.ultimoId++
    }

    obtenerProductos = async () => this.productos

    guardarProducto = async producto => {
        producto.id = String(parseInt(getUlitmoID()++))  // ?. optional chaining
        producto.nombre = producto.nombre
        producto.categoria = producto.categoria
        producto.precio = +producto.precio
        producto.stock = parseInt(producto.stock)
        incrementarUlitmoID()
        this.productos.push(producto)
        return producto    
    }

}

export default ModelProductosMem