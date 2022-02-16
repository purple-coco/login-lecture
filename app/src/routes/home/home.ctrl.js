"use strict"
//controller파일

const User = require("../../models/User");


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    },
};

//user를 검증하는 로직
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


//객체를 밖에서 사용하기 위해 exports 꼭 필요
module.exports = {
    output,
    process,
};

