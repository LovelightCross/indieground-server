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
    shows_proc_1.default.create(req.body.artist, req.body.venue, req.body.datetime, req.body.ticketinfo)
        .then((sets) => {
        res.json(sets);
    });
};
