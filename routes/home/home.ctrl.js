"use strict"

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};


//객체를 밖에서 사용하기 위해 exports 꼭 필요
module.exports = {
    hello,
    login,
};

