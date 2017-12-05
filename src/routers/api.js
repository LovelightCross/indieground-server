"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artists_1 = require("./artists");
const comments_1 = require("./comments");
const posts_1 = require("./posts");
const shows_1 = require("./shows");
const express_1 = require("express");
const router = express_1.Router();
router
    .use('/artists', artists_1.default)
    .use('/comments', comments_1.default)
    .use('/posts', posts_1.default)
    .use('/shows', shows_1.default)
    .use('/venues', shows_1.default)
    .use('/users', shows_1.default);
exports.default = router;
