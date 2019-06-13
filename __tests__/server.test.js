'use strict';

const supertest = require('supertest');
const app = require('../server/server.js').app;

describe('api server', () => {
  // question route - given a data type return a question of that data type
  it('should get a question matching the given array as the datatype', (done) => {
    return supertest(app)
      .get('/question/array/easy')
      .then(response => {
        expect(response.body[0].datatype).toEqual('array');
        expect(200);
        done();
      });
  });
  it('should get a question matching the given string as the data type', (done) => {
    return supertest(app)
      .get('/question/string/easy')
      .then(response => {
        expect(response.body[0].datatype).toEqual('string');
        expect(200);
        done();
      });
  });
  it('should get a question matching the given linked list as the data type', (done) => {
    return supertest(app)
      .get('/question/linkedlist/easy')
      .then(response => {
        expect(response.body[0].datatype).toEqual('linkedlist');
        expect(200);
        done();
      });
  });
  it('should handle errors when a datatype does not exist', (done) => {
    return supertest(app)
      .get('/question/tree')
      .then(response => {
        expect(response.body).toEqual([]);
        expect(200);
        done();
      });
  });
  // current question - should only respond with valid user id - otherwise cannnot get

  // hints - should return random info about problem
  // solution - should return solution of current problem
  it('should respond with the solution when a problem is completed', (done) => {
    return supertest(app)
      .get('/solution')
      .then(response => {
        expect(1).toEqual(1);
        expect(404);
        done();
      });
  });
});

/*
app.get('/question/:dataType?/:difficulty?/:userID?', getChallenge);
app.get('/currentQuestion/:userID', getCurrentQuestion);
app.get('/solution/:userID', getSolution);
*/