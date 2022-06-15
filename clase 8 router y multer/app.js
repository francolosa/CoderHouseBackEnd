const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');

const server = app.listen(8080, () => {
    console.log('server on');
});
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/api/productos', urlencodedParser, router);
//app.use('/static', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

