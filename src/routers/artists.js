"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artists_ctrl_1 = require("../controllers/artists.ctrl");
const router = express_1.Router();
router
    .get('/', artists_ctrl_1.all)
    .post('/', artists_ctrl_1.create);
exports.default = router;
