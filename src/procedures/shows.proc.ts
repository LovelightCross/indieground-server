import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetShowInfos');   
};

const create = (artist: string, venue: string, datetime: string, ticketinfo: string) => {
    return row('spCreateShowInfo', [artist, venue, datetime, ticketinfo]);
}

export default {
    all,
    create
};