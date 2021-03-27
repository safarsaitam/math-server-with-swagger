var express = require('express');
var router = express.Router();


const users = [{ name: 'Name' }]

router.get('/', function(req, res) {
  res.json(users);
});

module.exports = router;
