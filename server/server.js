'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const determineChallengeQuery = require('./determineChallengeQuery.js');
const queryDatabase = require('./queryDataBase.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/:dataType/:difficulty', getChallenge);

function getChallenge(request, response) {
  let {query, values} = determineChallengeQuery(request.params);
  queryDatabase(query, values)
    .then(result => {
      response.send(result)
    });
}

module.exports = {
  start: (PORT) => {
    app.listen(PORT);
    console.log(`Server listening on ${PORT}`);
  }
};