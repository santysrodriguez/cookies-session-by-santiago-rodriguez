var express = require('express');
var router = express.Router();

/* GET users listing. */

const {msj, logout} = require ('../controllers/usersControllers');

router
  .get('/mensaje', msj)
  .get('/logout', logout)

module.exports = router;
