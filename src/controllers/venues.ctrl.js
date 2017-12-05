"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const venues_proc_1 = require("../procedures/venues.proc");
exports.all = (req, res, next) => {
    venues_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    venues_proc_1.default.create(req.body.venueId, req.body.name, req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zip)
        .then((sets) => {
        res.json(sets);
    });
};
