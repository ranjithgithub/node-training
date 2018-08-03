const http = require('http');

var server =  http.createServer()
server.on("request", (req, resp) => {
  for (let i = 0 ; i < 1e7; i++){// Simulate CPU
    resp.end(`Handled by process ${process.pid}`)
  }
})

server.listen(8080, () =>{
    console.log(`Started process ${process.pid}`)
})