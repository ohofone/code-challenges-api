'use strict';

const queryDatabase = require('./queryDataBase.js');

module.exports = (request) => {
  // check users table for open question => get question id
  const userQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [request.body.amazon_id];

  const user = queryDatabase(userQuery, userValues);

  if (user.has_open_question) {
    const questionQuery = 'SELECT * FROM challenges WHERE id=$1;';
    const questionValues = [user.question_id];

    return queryDatabase(questionQuery, questionValues);
  } else {
    return [];
  }
};