"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetShowInfos');
};
const create = (artist, venue, datetime, ticketinfo) => {
    return base_proc_1.row('spCreateShowInfo', [artist, venue, datetime, ticketinfo]);
};
exports.default = {
    all,
    create
};
