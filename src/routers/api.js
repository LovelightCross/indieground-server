"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artists_1 = require("./artists");
const comments_1 = require("./comments");
const posts_1 = require("./posts");
const shows_1 = require("./shows");
const venues_1 = require("./venues");
const users_1 = require("./users");
const express_1 = require("express");
const router = express_1.Router();
router
    .use('/artists', artists_1.default)
    .use('/comments', comments_1.default)
    .use('/posts', posts_1.default)
    .use('/shows', shows_1.default)
    .use('/venues', venues_1.default)
    .use('/users', users_1.default);
exports.default = router;
