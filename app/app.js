//서버의 중심파일
"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());

//url 통해 전달되는 데이터가 제대로 전달되지 못하는 현상 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //use 미들웨어를 등록해주는 메소드

module.exports = app;