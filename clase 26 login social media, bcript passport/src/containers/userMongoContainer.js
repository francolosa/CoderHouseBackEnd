const mongoose = require('../database/mongooseConfig')
const { User } = require('../database/usersSchema')
const bcrypt = require('bcryptjs')

class UserMongoContainer {
  constructor(collectionName) {
    this.collection = collectionName
  }

  async register(reqbody) {
    const { username, email, password } = reqbody;
    const hashedPass = await bcrypt.hash(password, 10);
    let response = await User.create({ username: username, email: email, password: hashedPass })
    if(response) { return true } else { return false }
  }
  
  async logIn(reqbody) {
    const { username, password } = reqbody;
    let response = await User.findOne({ username: username })
    let comparePass
    if(response) {
       comparePass = await bcrypt.compare(password, response.password);
    }
    if (response && comparePass) {
      console.log("loged in success")
      return response
    } else {
      console.log("loged in failed")
      return false
    }
  }

  async logOut(reqbody) {
    return (reqbody)
  }
}
const userMongoContainer = new UserMongoContainer('users')
module.exports = userMongoContainer