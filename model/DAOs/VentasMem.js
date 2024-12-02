class ModelMem {
    constructor() {
        this.productos = [
            { id: '1', nombre: 'TV', precio: 1234.56, stock: 55 },
            { id: '2', nombre: 'Mesa', precio: 2345.67, stock: 77 },
            { id: '3', nombre: 'Mouse', precio: 3456.78, stock: 99 },
        ]
    }

    obtenerProductos = async () => this.productos

    obtenerProducto = async id => {
        const producto = this.productos.find(p => p.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1)  // ?. optional chaining
        
        producto.stock = parseInt(producto.stock)
        producto.precio = +producto.precio

        this.productos.push(producto)
        return producto    
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        if(index != -1) {
            const productoAnt = this.productos[index]
            const productoAct = { ...productoAnt, ...producto } // Spread Operator + Object Merge
            this.productos.splice(index, 1, productoAct)

            return productoAct
        }
        else {
            return {}
        }
    }

    borrarProducto = async id => {
        let producto = {}

        const index = this.productos.findIndex(p => p.id === id)
        if(index != -1) {
            producto = this.productos.splice(index, 1)[0]
        }

        return producto
    }
}

export default ModelMem