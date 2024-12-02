import { faker } from "@faker-js/faker";

const get = _ => ({
    nombre: faker.commerce.product(),
    precio: faker.number.float({min: 10, max: 10000, fractionDigits: 2 }),
    stock: faker.number.int({min: 0, max: 900})
})

//console.log(get())

export default {
    get
}