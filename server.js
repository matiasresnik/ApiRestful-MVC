import express from 'express'
import RouterProductos from './router/productos.js'
import Routerventas from './router/ventas.js'

import config from './config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// ----------------------------------
//     ApiRestful: productos
// ----------------------------------
app.use('/api/productos', new RouterProductos().start())
app.use('/api/ventas', new Routerventas().start())




const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
