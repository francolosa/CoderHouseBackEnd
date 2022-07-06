const http = require('http');

const server = http.createServer( (req,res) => {
    res.send("server on")
})

const connectedServer = server.listen(8080, () => {
    console.log(`escuchando en el puerto ${connectedServer.address().port}`);
})

