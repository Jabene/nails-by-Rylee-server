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

server.get(`/turd`, (req, res) => {
  console.log('hi')
})

server.listen(server.get('port'), () => {
  console.log(`${server.locals.title} is running on ${server.get('port')}.`);
})

module.exports = server;
