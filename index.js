const server = require('./api/server')

server.set('port', process.env.PORT || 8080)

server.listen(server.get('port'), () => console.log(`Server running on ${server.get('port')}`))
