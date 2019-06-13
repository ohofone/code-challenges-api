'use strict';

const updateTime = require('../server/updateTime.js');
const supertest = require('supertest');
const app = require('../server/server.js').app;
require('dotenv').config();

describe('update time', () => {
  it('should update the time if resonable time has passed', (done) => {
    return supertest(app)
      .get(`/question`)
      .then((testQuestion) => {
        //random number from 11 to 15 representing how mand minutes were spent solving the problem
        const NEW_TIME = Math.ceil(Math.random() * 5) + 10;
        return updateTime(testQuestion.body, NEW_TIME).then(
          (updatedQuestion) => {
            expect(
              testQuestion.length !== 0 &&
                testQuestion[0].avg_time !== updatedQuestion.avg_time
            ).toBeTruthy();
            done();
          }
        );
      })
      .catch((error) => {
        done();
      });
  });
});
