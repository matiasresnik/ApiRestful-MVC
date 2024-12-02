import ModelVentasMem from './ventasMem.js'

class ModelVentasFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria ***')
                return new ModelVentasMem()

            default:
                console.log('*** Persistiendo en Memoria (default) ***')
                return new ModelVentasMem()
        }
    }
}

export default ModelVentasFactory