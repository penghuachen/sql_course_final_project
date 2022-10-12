var express = require('express');
var router = express.Router();
const UserController = require('../controller/UserController.js');
const HomeController = require('../controller/HomeController.js');

router.get('/', HomeController.getHomeView);

router.post('/register', UserController.register);


module.exports = router;
