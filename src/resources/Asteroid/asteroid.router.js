const { Router } = require("express");
const asteroidController = require('./asteroid.controller');

const router = Router();

router
    .route('/')
    .post(asteroidController.create)
    .get(asteroidController.findAll);

router
    .route('/addList')
    .post(asteroidController.addList);

router
    .route('/:id')
    .get(asteroidController.get)
    .patch(asteroidController.update)
    .delete(asteroidController.remove);

module.exports = router;
