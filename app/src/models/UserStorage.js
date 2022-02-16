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
        }, {});
        return newUsers;
        //return this.#users;
    }

    //요청한 아이디에 해당하는 데이터만 가져오게 하는 메소드
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);//users의 key값을 list로 만듬
        const userInfo = usersKeys.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];//idx란 user의 id에서 파라미터로 넘겨준 id를 의미함
            return newUser;        
    },{});
    return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };

    }
}


module.exports = UserStorage;