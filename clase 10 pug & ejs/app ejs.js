const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

const server = app.listen(8080, () => {
    console.log('server on');
});
app.use(express.json());
app.use(express.static('./public'));
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', urlencodedParser, router);
