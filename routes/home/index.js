"use strict";

const express = require("express");
const app = express();
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);//로그인 경로로 갔을 때 로그인으로 이동
router.post("/login", ctrl.login);

module.exports = router;