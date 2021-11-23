const express = require('express')
const cors = require('cors');
const helmet = require('helmet');

const app = express()

app.locals.title = 'nails-by-rylee-server'

app.set('port', process.env.PORT || 5000)

app.get(`/turd`, (req, res) => {
  console.log('hi')
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})
