class ModelVentasMem {
    constructor() {
        this.ventas = [
            { id: '1', idJuego: '1', cantidad: 100 },
            { id: '2', idJuego: '1', cantidad: 200 },
            { id: '3', idJuego: '2', cantidad: 300 },
            { id: '4', idJuego: '2', cantidad: 400 },
            { id: '5', idJuego: '3', cantidad: 500 },
            { id: '6', idJuego: '3', cantidad: 600 },
            { id: '7', idJuego: '3', cantidad: 800 },
        ]
    }

    //Lo dejo para que se pueda testar nada mas
    /* obtenerVentas = async () => this.ventas*/
 
    guardarVenta = async venta => {
        venta.id = String(parseInt(this.ventas[this.ventas.length-1]?.id || 0) + 1)  // ?. optional chaining
        venta.idJuego = venta.idJuego
        venta.cantidad = parseInt(venta.cantidad)
        this.ventas.push(venta)
        return venta    
    }
}

export default ModelVentasMem