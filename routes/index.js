const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const notebooks = require('../public/topics/notebooks/script.js')
const assignment = require('../public/topics/assignments/script.js')
const qps = require('../public/topics/questionpaper/script.js')
const solutions = require('../public/topics/solutions/script.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// For Assignments
router.get('/topics/assignments/aoa', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[0], subject: "aoa"})
})

router.get('/topics/assignments/dbms', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[1], subject: "dbms"})
})

router.get('/topics/assignments/os', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[2], subject: "os"})
})

router.get('/topics/assignments/mp', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[3], subject: "mp"})
})

router.get('/topics/assignments/em4', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[4], subject: "em4"})
})

router.get('/topics/assignments/python', function (req, res, next) {
  res.render('../public/topics/assignments/assignment', {data: assignment[5], subject: "python"})
})


// For Notebooks
router.get('/topics/notebooks/aoa', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[0], subject: "aoa"})
})

router.get('/topics/notebooks/dbms', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[1], subject: "dbms"})
})

router.get('/topics/notebooks/os', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[2], subject: "os"})
})

router.get('/topics/notebooks/mp', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[3], subject: "mp"})
})

router.get('/topics/notebooks/em4', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[4], subject: "em4"})
})

router.get('/topics/notebooks/python', function (req, res, next) {
  res.render('../public/topics/notebooks/notebook', {data: notebooks[5], subject: "python"})
})

// For Questionpapers
router.get('/topics/questionpaper/aoa', function (req, res, next) {
  res.render('../public/topics/questionpaper/qp', {data: qps[0], subject: "aoa"})
})

router.get('/topics/questionpaper/dbms', function (req, res, next) {
  res.render('../public/topics/questionpaper/qp', {data: qps[1], subject: "dbms"})
})

router.get('/topics/questionpaper/os', function (req, res, next) {
  res.render('../public/topics/questionpaper/qp', {data: qps[2], subject: "os"})
})

router.get('/topics/questionpaper/mp', function (req, res, next) {
  res.render('../public/topics/questionpaper/qp', {data: qps[3], subject: "mp"})
})

router.get('/topics/questionpaper/em4', function (req, res, next) {
  res.render('../public/topics/questionpaper/qp', {data: qps[4], subject: "em4"})
})

// For Solutions
router.get('/topics/solutions/aoa', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[0], subject: "aoa"})
})

router.get('/topics/solutions/dbms', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[1], subject: "dbms"})
})

router.get('/topics/solutions/os', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[2], subject: "os"})
})

router.get('/topics/solutions/mp', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[3], subject: "mp"})
})

router.get('/topics/solutions/em4', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[4], subject: "em4"})
})

router.get('/topics/solutions/python', function (req, res, next) {
  res.render('../public/topics/solutions/solution', {data: solutions[5], subject: "python"})
})

// For uploading file
router.post('/fileupload', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.filepath;
    var newpath = `public/topics/${fields.category}/${fields.subject}/` + files.filetoupload.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        res.write("Oops!! Something went wrong")
      }
      res.redirect('upload.html')
      res.end();
    });
  });
})

module.exports = router;
