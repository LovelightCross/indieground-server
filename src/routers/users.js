"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_ctrl_1 = require("../controllers/users.ctrl");
const router = express_1.Router();
router
    .get('/', users_ctrl_1.all)
    .post('/', users_ctrl_1.create);
exports.default = router;
