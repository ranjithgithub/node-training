const net  =  require('net')
const server  =  net.createServer()

const socketHandlers = []
let counter = 0

server.on("connection", (socket) => {
  var clientId =  ++counter
  console.log('Client connected...')
  socket.setEncoding('utf8')
  socket.write('hello')

  socketHandlers.push(socket)

  socket.on("data", (data) =>{
      console.log('client says: ', data)
      socketHandlers.forEach(socketHandler => {
        if(socketHandler != socket){
           socketHandler.write(`Client ${clientId}: ${data}`)
        } 
      })
  })

  socket.on("error", () => {
      console.log('Client disconnected...')
  })
})

server.listen(9001, () => {
    console.log('Server started at port 9001')
})