const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const key = require('./Config/key');
const app = express();
const fs = require('fs');
const { execPath } = require('process');

require('./Config/config');

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
app.use(require('./Routes/rutas'))

app.use("/public", express.static(`${__dirname}/storage`));

app.listen(process.env.PORT ,() => console.log('conectado al servidor ' + process.env.PORT));