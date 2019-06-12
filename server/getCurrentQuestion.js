'use strict';

const queryDatabase = require('./queryDataBase.js');

module.exports = (request, response) => {
  // check users table for open question => get question id
  const userQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [request.params.userID];

  return queryDatabase(userQuery, userValues)
    .then(user => {
      if (user.length && user[0].has_open_question) {
        const questionQuery = 'SELECT * FROM challenges WHERE id=$1;';
        const questionValues = [user[0].question_id];

        return queryDatabase(questionQuery, questionValues).then(question => {
          response.send(question[0]);
        });
      } else {
        response.send({});
      }
    })
    .catch();
};
