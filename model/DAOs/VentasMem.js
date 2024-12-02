class ModelMem {
    constructor() {
        this.ventas = []
    }
    
    guardarVenta = async venta => {
        venta.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1)  // ?. optional chaining
        venta.idJuego = venta.idJuego
        venta.cantidad = parseInt(venta.cantidad)
        producto.precio = +producto.precio

        this.productos.push(producto)
        return producto    
    }
}

export default ModelMem