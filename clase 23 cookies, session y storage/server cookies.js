
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`server encendido escuchando en el puerto ${PORT}`);
})

server.on('error', error => console.log(error));


app.use(cookieParser("password"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/set", (req,res) => {
    res.cookie('server', 'express', {signed: true}).send('cookie set')
})

app.get("/get", (req, res) => {
    res.send(req.signedCookies)
})

app.use('*', (req, res) => {
    const {method, baseUrl} = req

    res.json({error: -2, ruta: baseUrl, metodo: method})
})


