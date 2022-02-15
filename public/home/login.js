"use strict";


const id = document.querySelector("#id");
    password = document.querySelector("#password");
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },//내가 보내는 데이터 형태를 명시
        body: JSON.stringify(req)//문자열을 object로 바꿔주는 메소드


    });
    console.log(id.vaule);
}

console.log("hello");
console.log("bye");