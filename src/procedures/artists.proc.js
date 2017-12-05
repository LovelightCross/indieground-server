"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetArtists');
};
const create = (artistId, artistName, soundcloudId, genre) => {
    return base_proc_1.row('spCreateArtist', [artistId, artistName, soundcloudId, genre]);
};
exports.default = {
    all,
    create
};
