import express from 'express'
import Controlador from '../controlador/ventas.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
    }

    start() {
        const router = express.Router()
        router.post('/', this.controlador.guardarVenta)
        //Lo dejo para que se pueda testar nada mas
        /* router.get('/', this.controlador.obtenerVentas) */

        return router
    }
}

export default Router