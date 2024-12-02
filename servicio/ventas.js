import ModelFactory from "../model/DAOs/ventasFactory.js"

import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
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