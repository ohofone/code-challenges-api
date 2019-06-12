'use strict';
const queryDatabase = require('./queryDataBase.js');

module.exports = request => {
  const userQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [request.params.userID];
  const MIN_REASONABLE_TIME_MINUTES = 5;
  const MAX_REASONABLE_TIME_MINUTES = 120;

  return queryDatabase(userQuery, userValues).then(user => {
    if (user.length && user[0].has_open_question) {
      let timeTakenMinutes = (Date.now() - user.start_time) / 60000;
      const questionQuery = `SELECT * FROM challenges WHERE id=$1;`;
      const questionValues = [user[0].question_id];
      return queryDatabase(questionQuery, questionValues).then(question => {
        if (
          timeTakenMinutes > MIN_REASONABLE_TIME_MINUTES &&
          timeTakenMinutes < MAX_REASONABLE_TIME_MINUTES
        ) {
          let currentAverage = question.avg_time === null ? 0 : 1;
          let completions = question.completions === null ? 0 : 1;
          let newAverage =
            (currentAverage * completions + timeTakenMinutes) /
            (completions + 1);

          //update query to questions table
          const updateQuestionQuery = `UPDATE challenges SET avg_time=$1, completions=$2 WHERE id=$3 RETURNING *;`;
          const updateQuestionValues = [
            newAverage,
            completions + 1,
            question.id,
          ];
          return queryDatabase(updateQuestionQuery, updateQuestionValues).then(
            question => {
              return question;
            }
          );
        } else {
          return question;
        }
      });
    }
  });
};
