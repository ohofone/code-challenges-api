'use strict';

const supertest = require('supertest');
const app = require('../server/server.js').app;
require('dotenv').config();

const herokuUrl = 'https://oh-of-one.herokuapp.com';

describe('api server', () => {

  it('should get a question matching the given array as the datatype', (done) => {
    return supertest(app)
      .get(`${herokuUrl}/question/array/easy/${process.env.AMZN_ID}`)
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
      .get(`${herokuUrl}/question/string/easy/`)
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
      .get(`${herokuUrl}/question/linkedlist/easy`)
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
      .get(`${herokuUrl}/question/tree`)
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
      .get(`${herokuUrl}/currentQuestion/${process.env.AMZN_ID}`)
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
      .get(`${herokuUrl}/solution/${process.env.AMZN_ID}`)
      .then(response => {
        expect(response.body.question).toBeDefined();
        done();
      })
      .catch(error => {
        done();
      });
  });
});
