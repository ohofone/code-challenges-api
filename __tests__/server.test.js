'use strict';

const supertest = require('supertest');
const app = require('../server/server.js').app;
require('dotenv').config();



describe('api server', () => {

  it('should get a question matching the given array as the datatype', (done) => {
    return supertest(app)
      .get(`/question/array/easy/${process.env.AMZN_ID}`)
      .then(response => {
        expect(response.body[0].datatype).toEqual('array');
        done();
      })
      .catch(error => {
        done();
      });
  });

  it('should get a question matching the given string as the data type', (done) => {
    return supertest(app)
      .get('/question/string/easy/')
      .then(response => {
        expect(response.body[0].datatype).toEqual('string');
        done();
      })
      .catch(error => {
        done();
      });
  });

  it('should get a question matching the given linked list as the data type', (done) => {
    return supertest(app)
      .get('/question/linkedlist/easy')
      .then(response => {
        expect(response.body[0].datatype).toEqual('linkedlist');
        done();
      })
      .catch(error => {
        done();
      });
  });

  it('should handle errors when a datatype does not exist', (done) => {
    return supertest(app)
      .get('/question/tree')
      .then(response => {
        expect(response.body).toEqual([]);
        done();
      })
      .catch(error => {
        done();
      });
  });

  it('should only respond with valid user id', (done) => {
    return supertest(app)
      .get(`/currentQuestion/${process.env.AMZN_ID}`)
      .then(response => {
        expect(response.body[0].question).toBeDefined();
        done();
      })
      .catch(error => {
        done();
      });
  });

  it('should respond with the solution when a problem is completed', (done) => {
    return supertest(app)
      .get(`/solution/${process.env.AMZN_ID}`)
      .then(response => {
        expect(response.body.question).toBeDefined();
        done();
      })
      .catch(error => {
        done();
      });
  });
});
