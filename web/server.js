const http = require('http');

var server =  http.createServer();

server.on("request", (req, resp) => {
  console.log('Handling request ..')
  resp.writeHead(200, {'Content-Type': 'text/html'})
  resp.write("<h2> hello Http web app </h2>")
  resp.end()
})

server.listen(8000, () => {
    console.log('Http server started')
})