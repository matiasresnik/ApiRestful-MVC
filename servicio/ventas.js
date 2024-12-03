import ModelVentasFactory from "../model/DAOs/VentasFactory.js"

import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelVentasFactory.get(config.MODO_PERSISTENCIA)
    }
    
    //Lo dejo para que se pueda testar nada mas
   /* obtenerVentas = async () => {
        const ventas = await this.model.obtenerVentas()
        return ventas
    } */
    
    guardarVenta = async venta => {
        const ventaGuardada = await this.model.guardarVenta(venta)
        return ventaGuardada
    }
}

export default Servicio