const { Router } = require("express");
const authController = require('./auth.controller');
const { body } = require("express-validator");

const router = Router();

router
    .route('/signUp')
    .post(
        body("password").isLength({ min: 8 }),
        body("email").isEmail(),
        body('username').isLength({ min: 4 }),
        authController.singUp
    );

router
    .route('/login')
    .post(authController.login);

module.exports = router;