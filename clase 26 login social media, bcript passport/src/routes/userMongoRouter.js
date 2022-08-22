const express = require('express');
const { Router } = express;
const router = Router();
const { auth } = require("../middlewares/middlewareAuth")
const userController = require('../containers/userMongoContainer')

router.get("/user", async (req, res) => {
  if(req.session.user){
    res.render("user", { username: req.session.username, admin: req.session.admin})
  } else {
    res.render("login")
  }
})

router.get("/login", async(req, res) => {
  res.render('login')
})

router.post("/login", async (req, res) => {
  let response = await userController.logIn(req.body)
  if(response){
    req.session.user = response.username;
    req.session.admin = response.admin; 
    console.log(response)
    res.render("user", { user: response })
  } else { 
    res.render("login")
  }
});

router.get("/register", async(req, res) => {
  res.render('register')
})

router.post("/register", async(req, res) => {
  let response = await userController.register(req.body)
  if(response = true){
    res.render('login')
  } else {
    res.render('register', { msj: 'registro fallido, intente nuevamente'})
  }
})

router.post("/logout", async (req, res) => {
    console.log("loged out")
    req.session.destroy()
    res.render("login")
}); 

router.get("/privado", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

module.exports = router