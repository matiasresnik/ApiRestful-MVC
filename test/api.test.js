import { expect } from 'chai'
import supertest from 'supertest'
import generador from './generador/producto.js'

const request = supertest('http://127.0.0.1:8080')

describe('test apirestful', () => {
    describe('GET', () => {
        it('total: deberia retornar un status 200', async () => {
            const response = await request.get('/api/productos/')
            //console.log(response)

            expect(response.status).to.eql(200)
        })

        it('id: deberia retornar un status 200', async () => {
            const response = await request.get('/api/productos/65b91cc575012768396918c6')
            //console.log(response)
            expect(response.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('debería incorporar un producto', async () => {
            const productoEnviado = generador.get()
            //console.log(productoEnviado)

            const response = await request.post('/api/productos').send(productoEnviado)
            expect(response.status).to.eql(200)

            const productoGuardado = response.body
            //console.log(productoGuardado)

            expect(productoGuardado).to.include.keys('nombre','precio','stock')

            expect(productoEnviado.nombre).to.eql(productoGuardado.nombre)
            expect(productoEnviado.precio).to.eql(productoGuardado.precio)
            expect(productoEnviado.stock).to.eql(productoGuardado.stock)
        })
    })
})