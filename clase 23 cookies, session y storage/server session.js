//require('dotenv').config()
const express = require('express');
const app = express();

const session = require('express-session');

//const PORT = process.env.PORT;
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`server encendido escuchando en el puerto ${PORT}`);
})

server.on('error', error => console.log(error));

app.use(session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))

app.get("/session" , (req,res) => {
    if(req.session.contador){
        req.session.contador++
        res.send(`veces: ${req.session.contador}`)
    } else {
        req.session.contador = 1;
        res.send(`veces: ${req.session.contador}`)
    }
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('*', (req, res) => {
    const {method, baseUrl} = req

    res.json({error: -2, ruta: baseUrl, metodo: method})
})