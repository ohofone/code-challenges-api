'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');


const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/:dataType', getChallenge);


function getChallenge(request, response, next) {
  const selectSQL = `SELECT * FROM challenges 
                     WHERE dataType=$1
                     ORDER BY random()
                     LIMIT 1;`;
  const values = [request.params.dataType];

  return client.query(selectSQL, values)
      .then((result) => {
        if (!result.rowCount) {
          // TODO: if no challenges --------------------------------------------------
          return result.rows;
        }

        response.send(result.rows);
      })
      .catch((error) => {
        // TODO: same return as if no challenges in database -------------------------
        console.error(error);
        return [];
      });

}


module.exports = {
  start: (PORT) => {
    app.listen(PORT);
    console.log(`Server listening on ${PORT}`);
  }
};