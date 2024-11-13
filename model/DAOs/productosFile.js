import fs from 'fs'

class ModelFile {
    #nombreArchivo = null

    constructor(file) {
        this.#nombreArchivo = file
    }

    #leerArchivo = async nombre => {
        let productos = []
        try {
            productos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}
        return productos
    }

    #escribirArchivo = async (nombre, productos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(productos, null, '\t'))
    }

    obtenerProductos = async () => await this.#leerArchivo(this.#nombreArchivo)

    obtenerProducto = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        const producto = productos.find(p => p.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1)  // ?. optional chaining
        
        producto.stock = parseInt(producto.stock)
        producto.precio = +producto.precio
        productos.push(producto)
        await this.#escribirArchivo(this.#nombreArchivo, productos)
        
        return producto    
    }

    actualizarProducto = async (id, producto) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        producto.id = id

        const index = productos.findIndex(p => p.id === id)
        if(index != -1) {
            const productoAnt = productos[index]
            const productoAct = { ...productoAnt, ...producto } // Spread Operator + Object Merge
            productos.splice(index, 1, productoAct)
            await this.#escribirArchivo(this.#nombreArchivo, productos)

            return productoAct
        }
        else {
            return {}
        }
    }

    borrarProducto = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        let producto = {}

        const index = productos.findIndex(p => p.id === id)
        if(index != -1) {
            producto = productos.splice(index, 1)[0]
            await this.#escribirArchivo(this.#nombreArchivo, productos)
        }

        return producto
    }
}

export default ModelFile