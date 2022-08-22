const mongoose = require('mongoose');

const userCollection = 'user';

const UserSchema = new mongoose.Schema({
        username: { type: String, require: true, max: 20 },
        email: { type: String, require: true, max: 20 },
        password: {type: String, require: true, max: 20 },
        admin: {type: Boolean }

})

const User = mongoose.model(userCollection, UserSchema);

module.exports = { User }