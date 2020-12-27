const {Router} = require('express');
const route = Router();

const upload = require('../Config/fileUp');


route.get("/", (req,res) => {
res.send("hola")
})

route.post('/load', upload.single("image"),(req,res) => {

  res.json({body: req.body})
});


module.exports = route;