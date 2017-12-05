"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_ctrl_1 = require("../controllers/comments.ctrl");
const router = express_1.Router();
router
    .get('/', comments_ctrl_1.all)
    .post('/', comments_ctrl_1.create);
exports.default = router;
