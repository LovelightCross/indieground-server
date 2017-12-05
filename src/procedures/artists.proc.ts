import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetArtists');   
};

const create = (artistId: string, artistName: string, soundcloudId: string, genre: string) => {
    return row('spCreateArtist', [artistId, artistName, soundcloudId, genre]);
}

export default {
    all,
    create
};