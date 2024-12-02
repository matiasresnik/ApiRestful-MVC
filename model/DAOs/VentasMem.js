class ModelVentasMem {
    static ultimoId=7;
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
    static obtenerUlitmoID(){
        return this.ultimoId
    }
    static incrementarUlitmoID(){
        this.ultimoId++
    }

    obtenerVentas = async () => this.ventas

    guardarVenta = async venta => {
        venta.id = String(parseInt(getUlitmoID()++))  // ?. optional chaining
        venta.idJuego = venta.idJuego
        venta.cantidad = parseInt(venta.cantidad)
        incrementarUlitmoID()
        this.productos.push(producto)
        return producto    
    }
}

export default ModelVentasMem