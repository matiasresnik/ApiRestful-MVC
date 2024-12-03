import Servicio from '../servicio/ventas.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    //Lo dejo para que se pueda testar nada mas
    /* obtenerVentas = async (req,res) => {
        try {
            const ventas = await this.servicio.obtenerVentas()
            res.status(200).json(ventas)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    } */
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