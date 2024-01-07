import server from "../index";
import request from "supertest";
import 'mocha'; 
import assert = require("assert");

describe('GET /users', () => {
  it('response 200 status code', (done) => {
    request(server).get(`/api/users?auth=${process.env.TOKEN_USER}&password=${process.env.PASSWORD_USER}`)
      .expect("Content-type", /json/)
      .expect(200, done);
  });

  it('response with Array of users', (done) => {
    request(server).get(`/api/users?auth=${process.env.TOKEN_USER}&password=${process.env.PASSWORD_USER}`)
      .end((err, res) => {
        assert(Array.isArray(res.body));
        assert(res.body.length > 0);
        done();
      });
  });
});

describe('DELETE /users/:id', ()=>{
  it('user is deleted with this service', (done) => {
    request(server).delete(`/api/users/${1}?auth=${process.env.TOKEN_USER}&password=${process.env.PASSWORD_USER}`)
    .expect(200)
    .then((res)=>{
      assert(res.body == "user is removed")
      done()
    })
  });
})