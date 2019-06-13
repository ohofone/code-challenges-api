'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const determineChallengeQuery = require('./determineChallengeQuery.js');
const queryDatabase = require('./queryDataBase.js');
const getCurrentQuestion = require('./getCurrentQuestion.js');
const getSolution = require('./getSolution.js');
const setCurrentUserQuestion = require('./setCurrentUserQuestion.js');
// const endCurrentUserQuestion = require('./endCurrentUserQuestion.js');
// const updateQuestionAverageTime = ;

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/question/:dataType?/:difficulty?/:userID?', getChallenge);
app.get('/currentQuestion/:userID', getCurrentQuestion);
app.get('/solution/:userID', getSolution);



function getChallenge(request, response) {
  let {query, values} = determineChallengeQuery(request.params);

  queryDatabase(query, values)
    .then((question) => {
      if (request.params.userID) {
        setCurrentUserQuestion(request.params.userID, question[0].id);
      }
      return question;
    })
    .then(question => {
      response.send(question);
    });
}

module.exports = {
  start: (PORT) => {
    app.listen(PORT);
    console.log(`Server listening on ${PORT}`);
  },
};
