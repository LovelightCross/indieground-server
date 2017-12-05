"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetShows');
};
const create = (showId, venueId, name, startTime, endTime, price, url) => {
    return base_proc_1.row('spCreateShow', [showId, venueId, name, startTime, endTime, price, url]);
};
exports.default = {
    all,
    create
};
