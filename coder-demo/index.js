import 'dotenv/config'
import express from 'express'

import {carritoRouter, productosRouter} from './src/routes/index.js'

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)

app.use('*', (req, res) => {
    const {method, baseUrl} = req

    res.json({error: -2, ruta: baseUrl, metodo: method})
})


app.listen(PORT, () => console.log('Running server...'))