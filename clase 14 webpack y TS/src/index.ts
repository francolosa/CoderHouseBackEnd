import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

const p: Persona = new Persona ('coder', 'house');

const app = express();

app.get('/', (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName()
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`conectado al puerto: ${PORT}`);
});