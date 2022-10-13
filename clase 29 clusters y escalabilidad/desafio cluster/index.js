const cluster = require("cluster");
const express = require("express");
const numCPUs = require("os").cpus().length;

const app = express();

if (cluster.isPrimary) {
  console.log("num cpus:", numCPUs);
  console.log("Primary PID:", process.pid);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worket finalizó ${new Date().toLocaleString()}`);
    cluster.fork();
  });
} else {
  const PORT = process.argv[2] || 8080;

  app.get("/", (req, res) => {
    res.send(
      `Servidor express escuchando en el puerto ${PORT} - PID ${process.pid}`
    );
  });

  app.listen(PORT, () => {
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID ${process.pid}`
    );
  });
}