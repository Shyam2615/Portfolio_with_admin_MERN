const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const auth_middleware = require("../middlewares/auth-middleware");

// router.get("/", (req, res)=>{
//     res.status(200).send("Welcome to router");
// });

// router.route('/').get((req, res)=>{
//     res.status(200).send("Welcome to router");
// });

router.route("/").get(authcontrollers.home);
router.route('/register').post( validate(signupSchema), authcontrollers.register );
router.route('/login').post( validate(loginSchema), authcontrollers.login);
router.route('/user').get(auth_middleware, authcontrollers.User_data);

module.exports = router