var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.json({
    "entity": "kardex",
    "version": "0.0.1"
  });
}); //get

module.exports = router;
