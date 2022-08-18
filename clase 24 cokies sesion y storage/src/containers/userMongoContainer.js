const mongoose = require('../database/mongooseConfig')
const { User } = require('../database/usersSchema')

class UserMongoContainer {
  constructor(collectionName) {
    this.collection = collectionName
  }

  async logIn(reqbody) {
    const { username, password } = reqbody;
    let response = await User.findOne({ username: username })
    if (response && response.password == password) {
      return response
    } else {
      return false
    }
    /*
      if (username !== "pepe" || password !== "pepepass") {
        return ("login failed");
      }
      req.session.user = username;
      req.session.admin = true;
      return ("login success!");
  */
  }

  async logOut(reqbody) {
    return (reqbody)
    //return (reqbody)
    /*
    req.session.destroy((err) => {
        if (!err) return("Logout ok!");
        else return({ status: "Logout error", body: err });
      });
      */
  }
}
const userMongoContainer = new UserMongoContainer('users')
module.exports = userMongoContainer