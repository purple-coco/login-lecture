"use strict";


const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password")
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {

    if (!id.value) return alert("아이디를 입력해주세요.");
    if (password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

    console.log(req);
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },//내가 보내는 데이터 형태를 명시
        body: JSON.stringify(req)//문자열을 object로 바꿔주는 메소드

//then 메소드 이용해 로그인 처리
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });

}
