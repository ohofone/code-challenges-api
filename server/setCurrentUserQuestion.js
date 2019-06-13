'use strict';

/**
 * Adds user to database if they dont exist
 * or updates user info if they do exist
 * @module setCurrentUserQuestion
 */

const queryDatabase = require('./queryDataBase.js');

module.exports = (user_id, question_id) => {
  // check if user exists in users table
  const userCheckQuery = `SELECT * FROM users WHERE amazon_id=$1;`;
  const userValues = [user_id];
  queryDatabase(userCheckQuery, userValues)
    .then((user) => {
      if (!user.length) {
        addNewUser(user_id).then(() => {
          updateCurrentQuestion(user_id, question_id);
        });
      } else {
        updateCurrentQuestion(user_id, question_id);
      }
    }).catch((error) => console.error(error));

  /**
   * Adds user to users table in database
   * @param user_id, passed id for user
   */
  function addNewUser(user_id) {
    const addUserQuery = `INSERT INTO users (amazon_id) VALUES ($1);`;
    const addUserValues = [user_id];
    return queryDatabase(addUserQuery, addUserValues);
  }

  /**
   * Updates the current question a user is working on
   * @param user_id, passed id for user
   * @param question_id, id of current question the user is working on
   */
  function updateCurrentQuestion(user_id, question_id) {
    const updateCurrentQuestionQuery = `UPDATE users SET has_open_question=$1, question_id=$2, start_time=$3 WHERE amazon_id=$4;`;
    const updateCurrentQuestionValues = [true, question_id, Date.now(), user_id];
    return queryDatabase(updateCurrentQuestionQuery, updateCurrentQuestionValues);
  }
};
