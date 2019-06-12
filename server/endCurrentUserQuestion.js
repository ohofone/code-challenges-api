'use strict';

const queryDatabase = require('./queryDataBase.js');

module.exports = (userID) => {
  const endQuestionQuery = `UPDATE users SET has_open_question=false WHERE id=$1;`;
  const endQuestionValues = [userID];
  return queryDatabase(endQuestionQuery, endQuestionValues);
};
