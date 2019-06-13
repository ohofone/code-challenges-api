'use strict';

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

  let dataType = params.dataType ? params.dataType.toLowerCase() : undefined;
  let difficulty = params.difficulty ? params.difficulty.toLowerCase() : undefined;

  if ((dataType === 'anydatatype' || dataType === undefined) &&
      (difficulty === 'anydifficulty' || difficulty === undefined)) {
    // any datatype challenge of any difficulty
    query = 'SELECT * FROM challenges ORDER BY random() LIMIT 1;';

  } else if (dataType === 'anydatatype') {
    // Any datatype challenge with certain difficulty
    query = `SELECT * FROM challenges WHERE difficulty=$1 ORDER BY random() LIMIT 1;`;
    values = [difficulty];

  } else if (difficulty === 'anydifficulty' || difficulty === undefined) {
    // Any difficulty challenge with certain data type
    query = `SELECT * FROM challenges WHERE dataType=$1 ORDER BY random() LIMIT 1;`;
    values = [dataType];

  } else {
    // challenge of certain data type and difficulty
    query = `SELECT * FROM challenges WHERE dataType=$1 AND difficulty=$2 ORDER BY random() LIMIT 1;`;
    values = [dataType, difficulty];
  }
  return { query, values };
};
