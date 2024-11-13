import ModelFactory from "../model/DAOs/productosFactory.js"

import config from '../config.js'
import { validar } from "./validaciones/producto.js"

//console.log( validar({nombre: 'CPU', precio: false, stock: 495}) )

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if (id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
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

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }

    calculoProductos = async tipo => {
        let resultado = 'cálculo no soportado'

        switch (tipo) {
            case 'promedio-precios':
                const productos = await this.model.obtenerProductos()
                const sumatoria = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
                const promedio = sumatoria / productos.length
                resultado = +promedio.toFixed(2)
                break

            case 'promedio-stock':
                const productos2 = await this.model.obtenerProductos()
                const sumatoria2 = productos2.reduce((acumulador, producto) => acumulador + producto.stock, 0)
                const promedio2 = sumatoria2 / productos2.length
                resultado = parseInt(promedio2)
                break

            default:
                //break
        }
        return { [tipo]: resultado }
    }
}

export default Servicio