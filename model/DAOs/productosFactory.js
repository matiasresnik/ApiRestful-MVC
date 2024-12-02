import ModelProductosMem from "./productosMem.js"

class ModelProductosFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria ***')
                return new ModelProductosMem()

            default:
                console.log('*** Persistiendo en Memoria (default) ***')
                return new ModelProductosMem()
        }
    }
}

export default ModelProductosFactory