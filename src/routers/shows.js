"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shows_ctrl_1 = require("../controllers/shows.ctrl");
const router = express_1.Router();
router
    .get('/', shows_ctrl_1.all)
    .post('/', shows_ctrl_1.create);
exports.default = router;
