/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const UserLogin = db.model('userLogin')

// describe('routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const codysEmail = 'cody@puppybook.com'
//     const codysPassword = '122455'

//     beforeEach(() => {
//       return UserLogin.create({
//         email: codysEmail,
//         password: codysPassword
//       })
//     })

//     it('GET /api/users', async () => {
//       const res = await request(app)
//         .get('/api/users')
//         .expect(401)

// expect(res.body).to.be.an('array')
// expect(res.body[0].email).to.be.equal(codysEmail)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
