"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetVenues');
};
const create = (venueId, name, address1, address2, city, state, zip) => {
    return base_proc_1.row('spCreateVenues', [venueId, name, address1, address2, city, state, zip]);
};
exports.default = {
    all,
    create
};
