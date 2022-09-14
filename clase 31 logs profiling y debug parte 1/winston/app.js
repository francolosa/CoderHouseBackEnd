const express = require('express')
const dotenv = require('dotenv').config()
const logger = require('./logger.js')

const app = express()

app.get("/sumar", (req, res) => {
    const {a , b} = req.query
    if(!isNaN(a) && !isNaN(b)){
        logger.info(`Parametros recibidos: a=${a}, b=${b} correctos para la suma`)
        res.send(`La suma es: ${parseInt(a) + parseInt(b)}`)
    } else {
        logger.error(`Parametros recibidos: a=${a}, b=${b} correctos para la suma`)
        req.status(404).send('Parametros incorrectos')
    }
})

app.get("*", (req, res)=>{
    const {url, method} = req.query
    logger.warn(`Ruta ${url} con método ${method} no implementada`)
    res.send(`Ruta ${url} con método ${method} no implementada`)
})

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, ()=>{
    logger.info(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    logger.error(`error en el servidor`)
})