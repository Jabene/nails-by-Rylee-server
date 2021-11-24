const server = require('./api/server')

server.set('port', process.env.PORT || 8080)

server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})

server.listen(server.get('port'), () => console.log(`Server running on ${server.get('port')}`))
