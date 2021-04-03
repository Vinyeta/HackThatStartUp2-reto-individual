const userModel = require('../User/user.model');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const singUp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const userExists = await userModel.getByUsername(req.body.username);
        if (userExists) return res.status(400).json("User already exists");
        const newUser = req.body;
        userModel.create(newUser);
        return res.status(201).json("User created");
    } catch (err) {
        console.log(err)
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.login(username, password);
        if (user) {
            const token = jwt.sign(
                { _id: user._id },
                process.env.TOKEN_SECRET
            );
            res.json({ token: token, user: user });
        };
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    };
};

module.exports = {
    singUp,
    login
}