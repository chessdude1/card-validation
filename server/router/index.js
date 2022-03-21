const cardController = require('../controllers/card-controller')
const Router = require('express').Router;
const router = new Router();

router.post('/card', cardController.addCard);

module.exports = router