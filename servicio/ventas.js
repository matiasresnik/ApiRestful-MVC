import ModelVentasFactory from "../model/DAOs/ventasFactory.js"

import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelVentasFactory.get(config.MODO_PERSISTENCIA)
    }
    
    obtenerVentas = async () => {
        const ventas = await this.model.obtenerVentas()
        return ventas
    }
    
    guardarVenta = async venta => {
        const ventaGuardada = await this.model.guardarVenta(venta)
        return ventaGuardada
    }
}

export default Servicio