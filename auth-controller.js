const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home logic

const home = async (req, res) => {
    try {
        res.status(200).send("Home page controller");
    } catch {
        console.log("error");
    }
}

//registration page logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        //hash the password 
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        await User.create({ username, email, phone, password: hash_password });

        res.status(200).json({ message: req.body });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

//login page logic

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        res.status(200).json("welcome to controller login");
    } catch (error) {
        res.status(500).json("internal server error");
    }
};


module.exports = { home, register, login };