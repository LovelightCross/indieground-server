"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_proc_1 = require("../procedures/users.proc");
exports.all = (req, res, next) => {
    users_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    users_proc_1.default.create(req.body.id, req.body.userId, req.body.postId, req.body.body)
        .then((sets) => {
        res.json(sets);
    });
};
