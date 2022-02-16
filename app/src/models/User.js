"use strict";

const UserStorage = require("./UserStorage");

class User {

    constructor(body) {
        this.body = body;

    }

    login() {
        //userStorage에서 데이터를 가져와 전달해야 함

        //body에 담아지는 변수가 많으니까 아예 변수로 선언
        const client = this.body;
        const { id, password } = UserStorage.getUserInfo(client.id);
        
        //id가 있는지 검사
        //내가 전달한 id가 UserStorage에 있는지 검사
        if(id) {
            if (id === client.id && password === client.password){
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};    
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;