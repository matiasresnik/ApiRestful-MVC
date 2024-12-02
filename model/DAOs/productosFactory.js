import ModelMem from "./productosMem.js"

class ModelFactory {
    static id=0;
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria ***')
                return new ModelMem()

            default:
                console.log('*** Persistiendo en Memoria (default) ***')
                return new ModelMem()
        }
    }
    static getNextId(){
        return String(id++)
    }
}

export default ModelFactory