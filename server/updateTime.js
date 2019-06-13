'use strict';

/**
 * Updates average time for each question
 * @module updateTime
 */
const queryDatabase = require('./queryDataBase.js');

/**
 * Calculates average time per question
 * Updates database with new average time
 * 
 * @param {object} - object containing all question details
 * @param {integer} - current time spent on challenge
 */

module.exports = (question, timeTakenMinutes) => {
  let currentAverage = question.avg_time === null ? 0 : question.avg_time;
  let completions = question.completions === null ? 0 : question.completions;
  let newAverage = (currentAverage * completions + timeTakenMinutes) / (completions + 1);

  newAverage = Math.floor(newAverage);

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
};
