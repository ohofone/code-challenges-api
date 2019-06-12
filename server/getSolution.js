'use strict';

/**
 * Sends solution back after question is completed
 * @module getSolution
 */
const queryDatabase = require('./queryDataBase.js');
const endCurrentUserQuestion = require('./endCurrentUserQuestion.js');
const updateTime = require('./updateTime.js');


/**
 * Checks database for solution associated with open question
 * Calculates and stores average time for each question completed
 * 
 * @param {object} - request
 * @param {object} - response
 * @returns {{question}} - object with all information related to open question
 */

module.exports = (request, response) => {
  const userQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [request.params.userID];
  const MIN_REASONABLE_TIME_MINUTES = 1; //TODO: change time back
  const MAX_REASONABLE_TIME_MINUTES = 120;

  return queryDatabase(userQuery, userValues).then(user => {
    let result = [];

    endCurrentUserQuestion(user[0].id);

    if (user.length && user[0].has_open_question) {
      let timeTakenMinutes = (Date.now() - user[0].start_time) / 60000;
      const questionQuery = `SELECT * FROM challenges WHERE id=$1;`;
      const questionValues = [user[0].question_id];
      return queryDatabase(questionQuery, questionValues).then(question => {
        question = question[0];
        if (
          timeTakenMinutes > MIN_REASONABLE_TIME_MINUTES &&
            timeTakenMinutes < MAX_REASONABLE_TIME_MINUTES
        ) {
          updateTime(question, timeTakenMinutes);
          response.send(question);
        } else {
          response.send(question);
          return question;
        }
      });
    } else {
      response.send(result);
    }
  });
};
