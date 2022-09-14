const express = require("express");
const { fork } = require("child_process");
const app = express();
app.listen(3000, () => {
  console.log("Server up!");
});

app.get("/info", function (req, res) {
  let info = {
    "argumentos de entrada": process.arch,
    "nombre de la plataforma": process.platform,
    "versión de node.js":  process.version,
    "memoria total reservada": process.memoryUsage(),
    "path de ejecución": process.argv[0],
    "process id": JSON.stringify(process.getegid),
    "carpeta del proyecto": process.argv[1]
  }
  res.send(info)
});

app.get("/api/randoms/:howManyNumbers?", function (req, res) {
  const child = fork("./randoms.js");
  let msg = {
    name: "start",
    howManyNumbers: req.params.howManyNumbers
  }
  child.send(msg)
  child.on("message", (randoms) => {
    res.send(`Los numeros randoms son: ${randoms}`);
  })
});