'use strict';
const queryDatabase = require('./queryDataBase.js');

module.exports = (request, response) => {
  const userQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [request.params.userID];
  const MIN_REASONABLE_TIME_MINUTES = 5;
  const MAX_REASONABLE_TIME_MINUTES = 120;

  return queryDatabase(userQuery, userValues).then(user => {
    let result = [];
    if (user.length && user[0].has_open_question) {
      let timeTakenMinutes = (Date.now() - user[0].start_time) / 60000;
      const questionQuery = `SELECT * FROM challenges WHERE id=$1;`;
      const questionValues = [user[0].question_id];
      result = queryDatabase(questionQuery, questionValues).then(question => {
        question = question[0];
        console.log('====================================================');
        console.log(timeTakenMinutes);
        console.log(user[0].start_time);
        console.log('====================================================');
        if (
          timeTakenMinutes > MIN_REASONABLE_TIME_MINUTES &&
          timeTakenMinutes < MAX_REASONABLE_TIME_MINUTES
        ) {
          console.log('====================================================');
          console.log('inside update');
          console.log('====================================================');
          let currentAverage =
            question.avg_time === null ? 0 : question.avg_time;
          let completions =
            question.completions === null ? 0 : question.completions;
          let newAverage =
            (currentAverage * completions + timeTakenMinutes) /
            (completions + 1);
          newAverage = Math.floor(newAverage);

          //update query to questions table
          const updateQuestionQuery = `UPDATE challenges SET avg_time=$1, completions=$2 WHERE id=$3 RETURNING *;`;
          const updateQuestionValues = [
            newAverage,
            completions + 1,
            question.id,
          ];
          return queryDatabase(updateQuestionQuery, updateQuestionValues).then(
            question => {
              response.send([question]);
              return question;
            }
          );
        } else {
          response.send([question]);
          return question;
        }
      });
    } else {
      response.send(result);
    }
  });
};
