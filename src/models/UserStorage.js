"use strict";


//클래스 안에 변수 선언 시 const 필요없다
class UserStorage {
    static #users = {
        id: ["tary", "joo"],
        password: ["1234", "1234"],
        name: ["김태리","남주혁"],
    };

    //데이터를 받아와서 구성할 수 있도록 하는 메소드
    //controller에서 해당 메소드 호출해야 실행됨
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            //users에 해당하는 키값이 있냐
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;

            console.log(newUsers, field);
        }, {});
        return newUsers;
        //return this.#users;
    }
}




module.exports = UserStorage;