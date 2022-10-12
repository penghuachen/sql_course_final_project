var express = require('express');
var router = express.Router();
const HomeController = require('../controller/HomeController.js');

router.get('/', HomeController.getHomeView);

module.exports = router;
