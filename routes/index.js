const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const data = require('../public/js/script');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileupload', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.filepath;
    var newpath = 'uploads/' + files.filetoupload.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        res.write("Oops!! Something went wrong")
      }
      console.log(data)
      res.redirect('upload.html')
      res.end();
    });
  });
})

module.exports = router;
