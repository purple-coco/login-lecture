"use strict";


//여기서 라우팅 해주자!

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);//로그인 경로로 갔을 때 로그인으로 이동
router.get("/register", ctrl.output.register);


router.post("/login", ctrl.process.login);//로그인 기능 처리
router.post("/register", ctrl.process.register);

module.exports = router;