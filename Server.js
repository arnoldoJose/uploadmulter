const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const key = require('./Config/key');
const app = express();
const path = require('path');
const cors = require('cors');
require('./Config/config');

app.use(cors());

app.use(express.static("/storage"));

mongoose.connect(key.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('Conectado A MongoDB.')
    } else {
        console.log('Error Al Conectare A MongoDB: ' + err)
    }
});


app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true}
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'storage/images')));

app.use(require('./Routes/rutas'))


app.listen(process.env.PORT ,() => console.log('conectado al servidor ' + process.env.PORT));