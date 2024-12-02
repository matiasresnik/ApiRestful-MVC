import ModelProductoFactory from "../model/DAOs/productosFactory.js"

import config from '../config.js'
import { validar } from "./validaciones/producto.js"

//console.log( validar({nombre: 'CPU', precio: false, stock: 495}) )

class Servicio {
    constructor() {
        this.model = ModelProductoFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async () => {
        const productos = await this.model.obtenerProductos()
        return productos
    }

    guardarProducto = async producto => {
        //validación específica del producto a guardar 
        const rta = validar(producto)
        if (rta.result) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            throw rta.error
        }
    }
}

export default Servicio