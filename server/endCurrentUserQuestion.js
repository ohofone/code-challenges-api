'use strict';


/**
 * Updates user table to show that question has been completed
 * @module endCurrentUserQuestion
 */

const queryDatabase = require('./queryDataBase.js');

/**
 * Turns off open question associated with user
 * 
 * @param {string} - user id
 * @returns {{has_open_question:false}}
 */

module.exports = (userID) => {
  const endQuestionQuery = `UPDATE users SET has_open_question=false WHERE id=$1;`;
  const endQuestionValues = [userID];
  return queryDatabase(endQuestionQuery, endQuestionValues);
};
