const express = require('express');
const router = express.Router();
const lista1Controller = require('../controllers/lista1Controller.js');

//Ex1
router.get('/ex1', lista1Controller.ex1);

module.exports = router;
