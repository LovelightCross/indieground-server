"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shows_proc_1 = require("../procedures/shows.proc");
exports.all = (req, res, next) => {
    shows_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    shows_proc_1.default.create(req.body.showId, req.body.venueId, req.body.name, req.body.startTime, req.body.endTime, req.body.price, req.body.url)
        .then((sets) => {
        res.json(sets);
    });
};
