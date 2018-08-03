const net =  require('net')

const readLine =  require('readline')

const readConsole = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const clientSocket =  new net.Socket()
clientSocket.connect(9001, "localhost", ()=> {
    console.log('Connected to server ...')
    clientSocket.setEncoding('utf8')
    clientSocket.on('data', (data) => {
        console.log("Server says: ", data)
        //console.log(`Server says:  ${data}`)
      
        //clientSocket.write(data)
       readConsole.setPrompt("Enter text to send, exit to teminate>>")
       readConsole.prompt()
    })

    readConsole.on('line', (line) => {
        if(line === 'exit'){
            console.log('exiting...')
            clientSocket.destroy()
            readConsole.close()
        } else {
            clientSocket.write(line)
            readConsole.prompt()
        }
       
    })
})