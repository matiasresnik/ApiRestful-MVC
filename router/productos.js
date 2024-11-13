import express from 'express'
import Controlador from '../controlador/productos.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
    }

    start() {
        const router = express.Router()

        router.get('/:id?', this.controlador.obtenerProductos)
        router.post('/', this.controlador.guardarProducto)
        router.put('/:id', this.controlador.actualizarProducto)
        router.delete('/:id', this.controlador.borrarProducto)

        router.get('/calculo/:tipo', this.controlador.calculoProductos)

        return router
    }
}

export default Router