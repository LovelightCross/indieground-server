"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetPosts');
};
const create = (title, body, userId, dateTime) => {
    return base_proc_1.row('spCreatePost', [title, body, userId, dateTime]);
};
exports.default = {
    all,
    create
};
