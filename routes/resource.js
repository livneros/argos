const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = "tmp/input";

router.get('/', function(req, res) {
  console.log("path = ", path);
  fs.readFile(path, 'utf8', function(err, contents) {
    if (err){
      res.send();
    }
    res.send(contents, 200)
  });
});


router.post('/', async function(req, res) {
  await fs.writeFile(path, JSON.stringify(req.body), function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send()
  });
});

module.exports = router;
