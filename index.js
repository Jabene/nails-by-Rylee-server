const express = require('express')
const app = express()


app.locals.title = 'nails-by-rylee-server'

app.set('port', process.env.PORT || 5000)

app.listen('/', () => {

})
