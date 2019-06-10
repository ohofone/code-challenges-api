![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Alexa Skills - Coding Interview Prep

### Author: Melissa Stock, Jagdeep Singh, Bonnie Wang, Jesse Van Volkinburg

### Links and Resources
* [submission PR](https://github.com/ohofone/code-challenges-api/pull/2)
* [travis](http://xyz.com)
* [back-end](https://oh-of-one.herokuapp.com/)

#### Documentation
* [jsdoc](http://xyz.com) (Server assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `DATABASE_URL` - URL to the running postgress instance/db

#### Running the app
* `npm start`
* Example Endpoint: `/:dataType/:difficulty`

* Endpoint: `/:array/:easy`
  * Returns a JSON object with an easy difficulty array coding challenge in it.
* Endpoint: `/:array/:medium`
  * Returns a JSON object with a medium difficulty array coding challenge in it.
* Endpoint: `/:array/:hard`
  * Returns a JSON object with an hard difficulty array coding challenge in it.
* Endpoint: `/:array/:all`
  * Returns a JSON object with a random difficulty array coding challenge in it.
  
* Endpoint: `/:string/:easy`
  * Returns a JSON object with an easy difficulty string coding challenge in it.
* Endpoint: `/:string/:medium`
  * Returns a JSON object with a medium difficulty string coding challenge in it.
* Endpoint: `/:string/:hard`
  * Returns a JSON object with an hard difficulty string coding challenge in it.
* Endpoint: `/:string/:all`
  * Returns a JSON object with a random difficulty string coding challenge in it.
  
* Endpoint: `/:tree/:easy`
  * Returns a JSON object with an easy difficulty tree coding challenge in it.
* Endpoint: `/:tree/:medium`
  * Returns a JSON object with a medium difficulty tree coding challenge in it.
* Endpoint: `/:tree/:hard`
  * Returns a JSON object with an hard difficulty tree coding challenge in it.
* Endpoint: `/:tree/:all`
  * Returns a JSON object with a random difficulty tree coding challenge in it.
  
#### Tests
* How do you run tests? `npm run test`
* What assertions were made?
* What assertions need to be / should be made?

#### UML
![API UML](http://i.imgur.com/7v5ASc8.png)
