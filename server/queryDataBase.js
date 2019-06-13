'use strict';

/**
 * Queries Postgres
 * @module
 */

const pg = require('pg');

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/**
 * Queries postgres database using passed in query and values
 *
 * @param {String} query
 * @param {Array} values
 * @returns {*|Promise<Array>} result of query to database
 */
module.exports = (query, values) => {
  return client.query(query, values)
    .then((result) => {
      if (!result.rowCount) {
        return [];
      }
      return result.rows;
    })
    .catch((error) => {
    // TODO: same return as if no challenges in database -------------------------
      console.error(error);
      return [];
    });
};