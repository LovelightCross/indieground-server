"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comments_proc_1 = require("../procedures/comments.proc");
exports.all = (req, res, next) => {
    comments_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    comments_proc_1.default.create(req.body.userId, req.body.postId, req.body.body)
        .then((sets) => {
        res.json(sets);
    });
};
