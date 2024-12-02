import express from 'express'
import Controlador from '../controlador/ventas.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
    }

    start() {
        const router = express.Router()
        router.post('/', this.controlador.guardarVenta)
        return router
    }
}

export default Router