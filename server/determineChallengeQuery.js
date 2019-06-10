/**
 * Determines challenge sql query given data type and difficulty
 * @module
 */

/**
 * Returns sql query/values for getting a challenge of passed data type and difficulty
 *
 * @param {Object} params, object with dataType and difficulty keys
 * @returns {{query: string, values: Array}}
 */
module.exports = (params) => {
  let query = '';
  let values = [];

  if (params.dataType === 'anyDatatype' &&
      params.difficulty === 'anyDifficulty') {
    // any datatype challenge of any difficulty
    query = 'SELECT * FROM challenges ORDER BY random() LIMIT 1;';

  } else if (params.dataType === 'anyDatatype') {
    // Any datatype challenge with certain difficulty
    query = `SELECT * FROM challenges WHERE difficulty=$1 ORDER BY random() LIMIT 1;`;
    values = [params.difficulty];

  } else if (params.difficulty === 'anyDifficulty') {
    // Any difficulty challenge with certain data type
    query = `SELECT * FROM challenges WHERE dataType=$1 ORDER BY random() LIMIT 1;`;
    values = [params.dataType];

  } else {
    // challenge of certain data type and difficulty
    query = `SELECT * FROM challenges WHERE dataType=$1 AND difficulty=$2 ORDER BY random() LIMIT 1;`;
    values = [params.dataType, params.difficulty];
  }
  return { query, values };
};
