const express = require('express')
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname})
})

httpServer.listen(3000, () => {
  console.log(`server on`)
})

io.on('connection', (socket) => {
    console.log('usuario conectado');

    let messages = []

    socket.emit('msgs', messages)
        
    socket.on('newMsg', newMsg =>{
        messages.push(newMsg)
        io.sockets.emit('msgs', messages)
    })

    let products = []

    socket.emit('products', products)

    socket.on('newProduct', newProduct => {
        products.push(newProduct)
        io.sockets.emit('products', products)
    })
})
