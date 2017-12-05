"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetUsers');
};
const create = (first_name, last_name, email, password) => {
    return base_proc_1.row('spCreateUser', [first_name, last_name, email, password]);
};
exports.default = {
    all,
    create
};
