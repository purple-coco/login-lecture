"use strict"

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        //console.log(UserStorage.getUsers("id","password", "name"));
        const users = UserStorage.getUsers("id", "password");

        //const userStorage = new UserStorage();//객체 인스턴스화
        //console.log(userStorage.users)//
        const response = {};
        //인증정보 검증
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                response.success = ture;
                return res.json();               
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다."
        return res.json(response);
    },
};


//객체를 밖에서 사용하기 위해 exports 꼭 필요
module.exports = {
    output,
    process,
};

