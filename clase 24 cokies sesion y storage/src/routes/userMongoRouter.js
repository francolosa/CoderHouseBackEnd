const express = require('express');
const { Router } = express;
const router = Router();
const { auth } = require("../middlewares/middlewareAuth")
const userController = require('../containers/userMongoContainer')

router.get("/login", async (req, res) => {
  let response = await userController.logIn(req.body)
  if(response == true){
    req.session.user = req.body.username;
    req.session.admin = true;    
    res.send("login succes")
  } else { res.send("login fail")}
});

router.get("/logout", async (req, res) => {
    req.session.destroy()
    res.send("logout ok")
}); 

router.get("/privado", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

module.exports = router