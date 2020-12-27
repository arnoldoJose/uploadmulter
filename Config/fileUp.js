
const multer = require('multer');
const shortid = require('shortid');

const storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,__dirname+'../../storage/images')
  },
  filename: function (req,file,cb) {
    let extexion = file.mimetype.split("/")[1];
    cb(null,`${shortid.generate()}.${extexion}`)
  }
});


const upload = multer({storage});

module.exports = upload;

