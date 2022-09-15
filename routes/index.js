var express = require('express');
var router = express.Router();

const {index, controlRegister, destroy} = require ('../controllers/mainControllers')
const validacion = require ('../validation/validation')

/* GET home page. */

router
  .get('/', index)
  .post('/validacion',validacion, controlRegister)
  .get('/destroy',destroy)

module.exports = router;
