const express = require('express');
const { Router } = express;
const router = Router();
const { auth } = require("../middlewares/middlewareAuth")
const userController = require('../containers/userMongoContainer')

router.get("/login", async (req, res) => {
  let response = await userController.logIn(req.body)
  if(response){
    console.log(response)
    req.session.user = response.username;
    req.session.admin = response.admin; 
    //res.redirect('/')
    res.send("login succes")
  } else { 
    //res.redirect('/login')
    res.send("login fail")
  }
});

router.get("/logout", async (req, res) => {
    req.session.destroy()
    //res.redirect('/')
    res.send("logout ok")
}); 

router.get("/privado", auth, (req, res) => {
  console.log(req.session.user)
  console.log(req.session.admin)
  res.send("si estas viendo esto es porque ya te logueaste!");
});

module.exports = router