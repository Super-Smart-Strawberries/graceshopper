// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Toy = db.model('toy')

// describe('Toy routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/toys/', () => {
//     const nameOfDuck = 'Rubberina'

//     beforeEach(() => {
//       return Toy.create({
//         name: nameOfDuck
//       })
//     })

//     it('GET /api/toys', async () => {
//       const res = await request(app)
//         .get('/api/toys')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].name).to.be.equal(name)
//     })
//   }) // end describe('/api/toys')
// }) // end describe('Toy routes')
