const { User } = require('../database/usersSchema')

function auth(req, res, next) {
    
    if (req.session?.user === "pepe" && req.session?.admin) {
      return next();
    }
    return res.status(401).send("error de autorización!");
  }

module.exports = { auth }