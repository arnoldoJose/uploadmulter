const path = require('path');
const multer = require('multer');
const shortid = require('shortid');

const storage = multer.diskStorage({
  destination: path.join(__dirname,'../storage/images'),
  filename: function (req,file,cb) {
    let extexion = file.mimetype.split("/")[1];
    cb(null,`${shortid.generate()}.${extexion}`)
  }
});


const upload = multer({storage});

module.exports = upload;

