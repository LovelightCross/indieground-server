"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_proc_1 = require("../procedures/posts.proc");
exports.all = (req, res, next) => {
    posts_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    posts_proc_1.default.create(req.body.title, req.body.body, req.body.userId, req.body.dateTime)
        .then((sets) => {
        res.json(sets);
    });
};
