const express = require('express');
const cors = require('cors');

const helmet = require('helmet');

const knex = require('knex')
const knexfile = require('../knexfile')
const environment = process.env.NODE_ENV || 'development'
const configuration = knexfile[environment]

const db = knex(configuration)

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.locals.title = 'nails-by-rylee-server'

server.set('port', process.env.PORT || 5000)

server.post(`/users`, (request, response) => {
  const user = request.body
  try {
    db('users')
      .insert({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password
      }, '*')
      .then(newUser => response.json(newUser))
  }
  catch(e) {
    console.error(e)
  }
})

server.post('/login', (request, response) => {
  const credentials = request.body
  try {
    db('users')
      .select()
      .where('email', credentials.email)
      .where('password', credentials.password)
      .then(user => response.json(user))
  }
  catch(e) {
    console.error(e)
  }
})


module.exports = server;
