const express = require('express');
const router = express.Router();
const {home, register, login} = require("../controllers/auth-controller");


//example 1.
// router.get("/", (req, res, next) => {
//     res.status(200).send("welcome to world best mern series router");
// });



//example 2.
// router.route("/").get((req, res, next) => {
//     res.status(200).send("welcome to world best mern series router");
// });

router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").get(login);

// router.route("/register").get((req, res, next) =>{
//     res.status(200).send("welcome to router register");
// })

module.exports = router;