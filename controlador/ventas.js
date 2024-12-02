import Servicio from '../servicio/ventas.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    guardarVenta = async (req,res) => {
        try {
            const venta = req.body

            //validación genérica del producto a guardar
            if(!Object.keys(venta).length) throw new Error('venta vacía')

            const ventaGuardada = await this.servicio.guardarVenta(venta)
            res.status(200).json(ventaGuardada)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

}

export default Controlador