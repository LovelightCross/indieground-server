"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetComments');
};
const create = (userId, postId, body) => {
    return base_proc_1.row('spCreateComment', [userId, postId, body]);
};
exports.default = {
    all,
    create
};
