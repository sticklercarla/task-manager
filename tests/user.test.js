const request = request('supertest')
const app = require('../src/app')

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Carla',
        email: 'carlastickler@gmail.com',
        password: 'banana123'
    }).expect(201)
})