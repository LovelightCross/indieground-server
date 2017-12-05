"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venues_ctrl_1 = require("../controllers/venues.ctrl");
const router = express_1.Router();
router
    .get('/', venues_ctrl_1.all)
    .post('/', venues_ctrl_1.create);
exports.default = router;
