require('dotenv').config()
const express = require("express");
const session = require("express-session");
const usersRouter = require('./src/routes/userMongoRouter');
const connectMongo = require("connect-mongo");
const MongoStore = connectMongo.create({
  mongoUrl: process.env.MONGO_DB_URI,
});


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  session({
    store: MongoStore,
    secret: "secreto",
    resave: true,
    saveUninitialized: true,
  })
);

app.use('/api/users', usersRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
