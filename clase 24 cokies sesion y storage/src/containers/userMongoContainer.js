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
  }

  async logOut(reqbody) {
    return (reqbody)
  }
}
const userMongoContainer = new UserMongoContainer('users')
module.exports = userMongoContainer