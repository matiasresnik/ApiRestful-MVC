import Servicio from '../servicio/productos.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerProductos = async (req,res) => {
        try {
            const productos = await this.servicio.obtenerProductos()
            res.status(200).json(productos)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    guardarProducto = async (req,res) => {
        try {
            const producto = req.body

            //validación genérica del producto a guardar
            if(!Object.keys(producto).length) throw new Error('producto vacío')

            const productoGuardado = await this.servicio.guardarProducto(producto)
            res.status(200).json(productoGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

}

export default Controlador