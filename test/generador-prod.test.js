import { expect } from 'chai'
import generador from './generador/producto.js'


describe('***** test del generador de producto *****', () => {
    it('el producto debe contener los campos nombre, precio y stock', () => {
        const producto = generador.get()
        //console.log(producto)
        expect(producto).to.include.keys('nombre','precio','stock')
    })

    it('deberia generar productos aleatorios', async () => {
        const producto1 = generador.get()
        const producto2 = generador.get()
        //console.log(producto1)
        //console.log(producto2)

        expect(producto1.nombre).not.to.eql(producto2.nombre)
        expect(producto1.precio).not.to.eql(producto2.precio)
        expect(producto1.stock).not.to.eql(producto2.stock)
    })
})
