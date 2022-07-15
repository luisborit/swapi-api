require('dotenv').config()
const request = require('supertest')
describe('Handler test', ()=>{
    test('get method', ()=>{
        const server = request(process.env.GET);
        return server
            .get(`/1`)
            .expect(200)
            .expect((response) => {
                expect(response.body).toEqual(expect.objectContaining({
          name: expect.any(String),
          height: expect.any(String),
          mass: expect.any(String)
        }))
      })
    })
    test('post method', ()=>{
        const server = request(process.env.POST);
        return server
            .post(`/1`)
            .expect(200)
            .expect((response) => {
                expect(response.body).toEqual(expect.objectContaining({
          name: expect.any(String),
          height: expect.any(String),
          mass: expect.any(String)
        }))
      })
    })
})