var express = require('express');
var router = express.Router();

// define User model
var User = require('../models/user');

/* get users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users){
    if(err) {
      return res.status(500).send({error: 'database failure'});
    } else {
      res.send('respond with a resource \n'+JSON.stringify(users));
    }
  });
});

/* add new user */
/*
router.post('/', function(req, res, next) {
  var user = new User();
  book.age = req.body.age;

  book.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});
*/

module.exports = router;
