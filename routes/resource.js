const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = "/tmp/test";

router.get('/', function(req, res, next) {
  fs.readFile(path, 'utf8', function(err, contents) {
    res.send(contents)
  });
});


router.post('/', function(req, res, next) {
  fs.writeFile(path, JSON.stringify(req.body), function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send()
  });
});

module.exports = router;
