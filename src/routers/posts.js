"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_ctrl_1 = require("../controllers/posts.ctrl");
const router = express_1.Router();
router
    .get('/', posts_ctrl_1.all)
    .post('/', posts_ctrl_1.create);
exports.default = router;
