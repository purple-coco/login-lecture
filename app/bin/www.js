"use strict";

const app = require("../app");
const PORT = 3000;


//서버 실행시키는 코드가 여기에 있으니까 이 파일을 실행시켜줘야 함
app.listen(PORT, () => {
    console.log("서버 가동");
});